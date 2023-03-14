// Import React and useState hook from React library
import React, { useState } from "react";

// Import the Login.css file
import "./Login.css";

// Define the Login function component
function Login() {
  // Use the useState hook to declare email and password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Event handler function to update the email state
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler function to update the password state
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Log the email and password states to the console
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Add code to verify password
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-header">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// Export the Login component as the default export
export default Login;
