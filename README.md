# PopX - Modern User Authentication & Profile Management

A React-based web application for user authentication and profile management with a modern, responsive UI.

## Features

- 🔐 User Authentication
  - Sign Up with email/password
  - Login with floating label inputs
  - Password visibility toggle
  - Form validation
  - Secure password handling

- 👤 Profile Management
  - User profile creation and editing
  - Profile image upload
  - Bio and contact information
  - Agency/Individual account types
  - Responsive design for all screen sizes

- 💫 Modern UI Elements
  - Floating label inputs
  - Smooth transitions and animations
  - Purple-themed modern design
  - Mobile-first responsive layout
  - Eye-pleasing form validation

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

## Features in Detail

### Home Page
- Welcome screen with logo
- Options to create account or login
- Responsive design for many devices

### Authentication
- Email validation
- Password strength requirements
- Secure password storage
- Form validation with error messages

### Profile Management
- Edit personal information
- Upload/remove profile picture
- Add/edit bio
- Toggle between agency and individual account types
- Save/cancel changes functionality

### UI/UX Features
- Floating label inputs
- Password visibility toggle
- Smooth transitions
- Form validation feedback
- Responsive design
- Modern purple theme

## Development

To run the project in development mode:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
