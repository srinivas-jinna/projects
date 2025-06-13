# Placeholder: Add this to your Django settings.py
INSTALLED_APPS = [
    ...
    'accounts',
    'django.contrib.sessions',
]

TEMPLATES = [
    {
        ...
        'DIRS': [BASE_DIR / 'accounts/templates'],
    },
]

LOGIN_REDIRECT_URL = 'home'
LOGOUT_REDIRECT_URL = 'login'
