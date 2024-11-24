"use client";

import { useState } from "react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? "/api/auth/signup" : "/api/auth/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Success: ${isSignUp ? "User registered" : "Logged in"}`);
        console.log(data);
      } else {
        alert(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h1>{isSignUp ? "Sign Up" : "Log In"}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        Switch to {isSignUp ? "Log In" : "Sign Up"}
      </button>
    </div>
  );
};

export default AuthPage;
