import cv2
import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
import threading
from ultralytics import YOLO
import easyocr
import re

# Load YOLO model
model = YOLO('runs/detect/train6/weights/best.pt')

# Initialize OCR
reader = easyocr.Reader(['en'])

# Plate pattern: e.g., KA01AB1234
plate_pattern = re.compile(r'^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$')

# Setup GUI
root = tk.Tk()
root.title("Indian Number Plate Recognition")

# Video frame
video_label = tk.Label(root)
video_label.pack()

# Table for displaying detected numbers
tree = ttk.Treeview(root, columns=("Detected Number",), show="headings")
tree.heading("Detected Number", text="Detected Number")
tree.pack(pady=10)

# Set for already detected numbers (avoid duplicates)
detected_numbers = set()

# Function to reset table and set
def reset_table():
    for row in tree.get_children():
        tree.delete(row)
    detected_numbers.clear()

# Reset button
reset_btn = tk.Button(root, text="Reset", command=reset_table, bg="red", fg="white")
reset_btn.pack(pady=5)

# Webcam video processing
cap = cv2.VideoCapture(0)

def update_video():
    ret, frame = cap.read()
    if not ret:
        root.after(10, update_video)
        return

    results = model(frame)[0]

    for box in results.boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        cropped = frame[y1:y2, x1:x2]

        # OCR on cropped region
        ocr_result = reader.readtext(cropped)
        for detection in ocr_result:
            text = detection[1].upper().replace(" ", "")
            if plate_pattern.fullmatch(text) and text not in detected_numbers:
                detected_numbers.add(text)
                tree.insert("", "end", values=(text,))

        # Draw bounding box
        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)

    # Convert BGR to RGB and display on GUI
    img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    img = Image.fromarray(img)
    imgtk = ImageTk.PhotoImage(image=img)
    video_label.imgtk = imgtk
    video_label.configure(image=imgtk)

    root.after(10, update_video)

# Start video
update_video()

# Start GUI
root.mainloop()

# Cleanup
cap.release()
cv2.destroyAllWindows()
