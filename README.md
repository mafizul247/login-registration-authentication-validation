# Login Registration Authentication Validation

This repository contains an implementation of a login and registration system with authentication and validation features.

## Features

- **CSS Framework**: Using Bootstrap for styling and layout.
- **Email Verification**: Users receive an email verification link upon registration.
- **Password Reset**: Users can reset their passwords through email.
- **Password Validation**: Passwords are validated using regular expressions.
- **Authentication**: 
  - Login/Registration using Firebase.
  - Third-party authentication with Google and GitHub.

## Technologies Used

- **HTML/CSS**: For the frontend structure and styling.
- **Bootstrap**: For responsive design and layout.
- **Firebase**: For authentication (email/password, Google, GitHub).
- **JavaScript**: For client-side logic.
- **Regular Expressions**: For password validation.

## Getting Started

### Prerequisites

- Node.js installed
- Firebase project set up
- GitHub and Google OAuth credentials

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mafizul247/login-registration-authentication-validation.git
    cd login-registration-authentication-validation
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable Email/Password, Google, and GitHub authentication methods.
    - Replace the Firebase configuration in your project.

4. Run the application:
    ```sh
    npm start
    ```

## Usage

1. Open the application in your browser.
2. Register with a valid email and password.
3. Verify your email through the link sent to your inbox.
4. Log in with your credentials.
5. Use Google or GitHub to log in if preferred.
6. Reset your password if you forget it.

## Live Demo

Check out the live demo of the project [here](https://login-registration-authentication.netlify.app/).





