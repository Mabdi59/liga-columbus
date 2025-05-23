# Liga Columbus React Project Starter

This is the React starter project for Liga Columbus. This document walks you through how to set up and run the project. It also explains the project's features, such as React Router and authentication.

## Project setup

The first thing you'll need to do is to download any dependencies by running this command:

```
npm install
```

Next, take a moment to review the `.env` file that's located in the root of the project. You can store environment variables that you want to use throughout your application in this file. When you open it, it'll look like this:

```
VITE_REMOTE_API=http://localhost:9000
```

*Note:* the Java Spring Boot backend is configured to run on port `9000` instead of `8080`.

Start your React application with the following command:

```
npm run dev
```

## Application styling

The application includes two global CSS files—`public/css/global.css` and `public/css/reset.css`—that provide basic styling to give you a clean starting point. You're free to modify or replace these files to create the visual design you want for Liga Columbus.

## Authentication

When you first run the project and visit the base URL, you're taken to the home page at the route `/`. There's a side nav with a link to the login page. From there, you can log in (see the backend instructions for default credentials) or register a new user.

Once you log in, the nav updates with links to "Profile" (a protected route) and "Logout." The route for "Profile" uses the `<ProtectedRoute>` component to ensure a user is logged in before showing the content.

Authentication features include:

* `src/context/UserContext.jsx`: the user data context for sharing user info across components
* In `src/App.jsx`:

  * `handleLogin()` and `handleLogout()` functions manage user sessions
  * A `useEffect` Hook retrieves the stored user and token from `localStorage` when the page reloads
  * The `<UserContext.Provider>` wraps the main app so all components can access user context
