# PopX - Modern User Authentication & Profile Management

A React-based web application for user authentication and profile management with a modern, responsive UI.

## Features

- 👤 Profile Management
  - User profile creation and editing
  - Profile image upload
  - Bio and contact information
  - Agency/Individual account types
  - Responsive design for many screen sizes
  - Save/cancel changes functionality
  - Options to create account or login

- 💫 Modern UI Elements
  - Floating label inputs
  - Smooth transitions and animations
  
## Tech Stack

- React 19.1.0
- React Router DOM 7.6.0
- Tailwind CSS 4.1.7
- Vite 6.3.5
- Lucide React (for icons)
- React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── AccountSettings.jsx  # User profile management
│   ├── FloatingLabelInput.jsx  # Reusable input component
│   ├── Home.jsx  # Landing page
│   ├── Layout.jsx  # Main layout wrapper
│   ├── Login.jsx  # User login
│   └── Signup.jsx  # New user registration
├── assets/
│   └── p.svg  # Logo asset
├── App.jsx  # Main application component
└── main.jsx  # Application entry point
```