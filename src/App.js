import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Code, ExternalLink, Menu, X, Calendar, Award, Briefcase, GraduationCap, FileText, User, Sparkles, Cpu, Database, Cloud, Terminal, Brain, Zap, Shield, BarChart, Download } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Sparkles },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills = {
    languages: ['Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'Java'],
    frameworks: ['React.js', 'Node.js', 'Django', 'PyTorch', 'TensorFlow', 'OpenCV'],
    databases: ['SQL', 'MongoDB'],
    cloud: ['REST APIs', 'Cloud Computing'],
    os: ['Linux/Unix', 'Windows']
  };

  const experiences = [
    {
      title: 'AI Researcher Intern',
      company: 'Quanint Tech Soft Pvt Ltd',
      location: 'Hyderabad, TG',
      period: '05/2025 – 07/2025',
      description: [
        'Spearheaded the development and deployment of cutting-edge AI/ML models for real-time object detection applications, utilizing state-of-the-art YOLO architecture and OpenCV for computer vision tasks',
        'Implemented advanced deep learning algorithms that achieved 94% accuracy in object detection tasks, significantly improving the company\'s automated quality control systems',
        'Analyzed and processed large-scale datasets exceeding 100GB using Pandas and SQL, implementing efficient data pipelines that reduced processing time by 40%',
        'Trained and fine-tuned multiple AI models including CNNs and RNNs using TensorFlow and PyTorch, optimizing hyperparameters to achieve superior performance metrics',
        'Collaborated with cross-functional teams to integrate AI solutions into existing production systems, ensuring seamless deployment and scalability'
      ],
      tech: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'SQL', 'Pandas']
    },
    {
      title: 'AIML Developer Intern',
      company: 'Amaravati Software Innovations Pvt Ltd',
      location: 'Rajamundry, AP',
      period: '06/2024 – 07/2024',
      description: [
        'Architected and deployed sophisticated AI/ML models using Python, TensorFlow, and PyTorch, focusing on natural language processing and computer vision applications',
        'Built an innovative NLP-based customer service chatbot that improved response time by 86% and handled over 5,000 customer queries daily with 92% satisfaction rate',
        'Implemented advanced sentiment analysis algorithms that helped the company understand customer feedback patterns, leading to a 25% improvement in product features',
        'Conducted comprehensive data analysis on customer interaction datasets using Pandas and SQL, extracting actionable insights that drove business decisions',
        'Presented findings and model performance metrics to stakeholders, demonstrating clear ROI and securing approval for full-scale implementation'
      ],
      tech: ['Python', 'TensorFlow', 'NLP', 'Chatbot Development', 'Data Analysis']
    },
    {
      title: 'C and Python Programming Intern',
      company: 'Technical Hub',
      location: 'Surampalem, AP',
      period: '09/2024 – 12/2024',
      description: [
        'Conducted comprehensive weekly training sessions on C and Python programming, covering advanced topics including data structures, algorithms, and best coding practices for 50+ students',
        'Developed and implemented a structured curriculum that improved students\' debugging accuracy by 70% and problem-solving skills by 65%',
        'Performed detailed code reviews for over 200 programming assignments, ensuring compliance with industry standards and providing constructive feedback',
        'Created interactive coding challenges and real-world projects that helped students understand practical applications of programming concepts',
        'Mentored junior developers on software development best practices, resulting in a 30% reduction in code errors and improved team productivity'
      ],
      tech: ['C Programming', 'Python', 'Data Structures', 'Mentoring', 'Code Review']
    }
  ];

  const projects = [
    {
      title: 'Automatic License Plate Recognition System',
      description: 'Developed a sophisticated Machine Learning model for automatic license plate recognition using state-of-the-art computer vision techniques. The system employs YOLOv8 for real-time plate detection with 96% accuracy and integrates Tesseract OCR for character recognition. Built an intuitive GUI using Tkinter that allows users to upload images or connect to live camera feeds. The system can process multiple vehicles simultaneously and maintains a database of recognized plates with timestamps. Implemented data augmentation techniques to improve model robustness under various lighting conditions and angles.',
      features: [
        'Real-time license plate detection with 96% accuracy',
        'Multi-vehicle simultaneous processing capability',
        'Database integration for storing recognized plates',
        'Works under various lighting and weather conditions',
        'User-friendly GUI with live camera feed support'
      ],
      tech: ['Python', 'YOLOv8', 'OCR', 'Computer Vision', 'Tkinter', 'OpenCV'],
      icon: Brain
    },
    {
      title: 'Advanced Snake Game with AI Mode',
      description: 'Created an enhanced version of the classic Snake game using Python\'s Turtle module with advanced Object-Oriented Programming principles. The game features multiple difficulty levels, a scoring system with leaderboard functionality, and special power-ups. Implemented an AI mode where the snake uses pathfinding algorithms (A* algorithm) to automatically collect food while avoiding collisions. Added features like pause/resume, save game state, and customizable themes. The project demonstrates strong understanding of OOP concepts including inheritance, encapsulation, and polymorphism.',
      features: [
        'Multiple difficulty levels and game modes',
        'AI-powered autopilot mode using A* pathfinding',
        'Leaderboard system with persistent high scores',
        'Power-ups and special effects',
        'Save/load game functionality'
      ],
      tech: ['Python', 'Turtle Graphics', 'OOP', 'A* Algorithm', 'Game Development'],
      icon: Zap
    },
    {
      title: 'Secure User Authentication System',
      description: 'Engineered a robust and secure user authentication system using Django framework with advanced security features. Implemented multi-factor authentication (MFA), password strength validation, and account recovery mechanisms. The system uses bcrypt for password hashing, JWT tokens for session management, and includes protection against common vulnerabilities like SQL injection, XSS, and CSRF attacks. Integrated email verification, login attempt monitoring, and automatic account lockout after failed attempts. Built RESTful APIs for seamless integration with frontend applications and mobile apps.',
      features: [
        'Multi-factor authentication (MFA) support',
        'JWT-based session management',
        'Email verification and password recovery',
        'Protection against SQL injection, XSS, and CSRF',
        'RESTful API for cross-platform integration'
      ],
      tech: ['Django', 'Python', 'JWT', 'REST API', 'PostgreSQL', 'Security'],
      icon: Shield
    }
  ];

  const achievements = [
    {
      title: 'Smart India Hackathon Leader',
      description: 'Led a team of 6 members in the prestigious Bharat Vision Smart India Hackathon to design an innovative image recognition chatbot. Achieved 98% efficiency using advanced machine learning algorithms and computer vision techniques. Our solution was selected among the top 10 projects nationwide.',
      icon: Brain
    },
    {
      title: 'Futurepreneurs Challenge Participant',
      description: 'Participated in Startup Mahakumbh 2025, where I pitched innovative AI-driven solutions to industry leaders. Gained valuable insights through interactions with successful startup founders and CEOs, expanding my entrepreneurial perspective.',
      icon: Zap
    },
    {
      title: 'Top 10% in DSA',
      description: 'Achieved top 10% ranking in Data Structures and Algorithms proficiency by solving 150+ LeetCode problems and 100+ GeeksForGeeks problems. Specialized in dynamic programming, graph algorithms, and system design.',
      icon: BarChart
    },
    {
      title: '4-Star Ratings',
      description: 'Earned prestigious 4-star ratings in Problem Solving, Python, C++, and C on HackerRank. Completed "10 Days of JavaScript" challenge, demonstrating proficiency across multiple programming languages.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/70 backdrop-blur-sm'
      }`}>
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <div className="flex items-center flex-shrink-0">
              <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                SJ
              </span>
            </div>
            
            {/* Desktop Navigation - All items in one line */}
            <div className="hidden md:flex items-center justify-end flex-1 ml-4">
              <div className="flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xs lg:text-sm xl:text-base font-medium transition-all whitespace-nowrap hover:text-blue-600 px-2 lg:px-3 py-1 ${
                      activeSection === item.id 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:border-b-2 hover:border-blue-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
              <img 
                src="profile-photo.jpg" 
                alt="Srinivas Jinna"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span class="text-white text-4xl font-bold">SJ</span>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Srinivas Jinna
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            AI/ML Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionate about building intelligent solutions that solve real-world problems. 
            Specializing in machine learning, computer vision, and full-stack development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:srinivasjinna8767@gmail.com" 
               className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
            <a href="https://linkedin.com/in/srinivas-jinna" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <button
               onClick={() => {
                 // Create a temporary link to download the resume
                 const link = document.createElement('a');
                 link.href = '/srinivas-jinna-resume.pdf'; // You'll need to host this file
                 link.download = 'Srinivas_Jinna_Resume.pdf';
                 link.click();
               }}
               className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate AI/ML Developer and Software Engineer with expertise in building intelligent solutions 
                that solve real-world problems. Currently pursuing my B.Tech in Computer Science at RGUKT-SKLM, 
                I have a strong foundation in machine learning, deep learning, and software development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in tech has been marked by continuous learning and practical application. From developing 
                chatbots that improve customer response time by 86% to leading teams in national hackathons, I thrive 
                on challenges that push the boundaries of what's possible with AI and software engineering.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Rajahmundry, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">+91 8374850133</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">B.Tech CS (2022-2026)</span>
                </div>
              </div>
              <div className="mt-6">
                <button
                   onClick={() => {
                     const link = document.createElement('a');
                     link.href = '/srinivas-jinna-resume.pdf';
                     link.download = 'Srinivas_Jinna_Resume.pdf';
                     link.click();
                   }}
                   className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  <Download className="w-5 h-5" />
                  <span>Download Full Resume</span>
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">LeetCode Problems</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-purple-600">86%</div>
                  <div className="text-sm text-gray-600">Chatbot Efficiency</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-pink-600">4⭐</div>
                  <div className="text-sm text-gray-600">HackerRank Rating</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600">Top 10%</div>
                  <div className="text-sm text-gray-600">DSA Proficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 capitalize flex items-center space-x-2">
                  {category === 'languages' && <Code className="w-5 h-5 text-blue-600" />}
                  {category === 'frameworks' && <Cpu className="w-5 h-5 text-purple-600" />}
                  {category === 'databases' && <Database className="w-5 h-5 text-green-600" />}
                  {category === 'cloud' && <Cloud className="w-5 h-5 text-pink-600" />}
                  {category === 'os' && <Terminal className="w-5 h-5 text-orange-600" />}
                  <span>{category === 'os' ? 'Operating Systems' : category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="ml-8 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-600">{exp.title}</h3>
                      <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 pl-4 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <project.icon className="w-10 h-10 text-blue-600" />
                    <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                  </div>
                  <a 
                    href="https://github.com/srinivas-jinna/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all transform hover:scale-105 shadow-md"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 pl-4 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Achievements & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <achievement.icon className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">IT-Specialist Certiport</h4>
                  <p className="text-sm text-gray-600">HTML, CSS, Python, Java Certifications</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <FileText className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Cisco Networking Academy</h4>
                  <p className="text-sm text-gray-600">C++, C Programming, Python Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always open to discussing new opportunities, collaborations, and interesting projects in AI/ML and software development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:srinivasjinna8767@gmail.com" 
               className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/srinivas-jinna" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/srinivas-jinna" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Coding Profiles */}
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Coding Profiles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="https://leetcode.com/u/srinivas__jinna/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <Code className="w-5 h-5 text-orange-600" />
                <span className="font-medium">LeetCode</span>
              </a>
              <a href="https://www.codechef.com/users/srinivasjinna" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-2 px-4 py-3 bg-brown-50 hover:bg-brown-100 rounded-lg transition-colors">
                <Code className="w-5 h-5 text-brown-600" />
                <span className="font-medium">CodeChef</span>
              </a>
              <a href="https://www.geeksforgeeks.org/user/srinivasjlgh7/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <Code className="w-5 h-5 text-green-600" />
                <span className="font-medium">GeeksForGeeks</span>
              </a>
              <a href="https://www.hackerrank.com/profile/22A91A05G4" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                <Code className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">HackerRank</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Srinivas Jinna. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .bg-brown-50 {
          background-color: #fdf5f3;
        }
        
        .bg-brown-100 {
          background-color: #f9e7e3;
        }
        
        .text-brown-600 {
          color: #92400e;
        }
      `}</style>
    </div>
  );
}