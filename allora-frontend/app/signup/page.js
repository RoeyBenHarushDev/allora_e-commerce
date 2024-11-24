"use client";

import Image from "next/image";
import { useState } from "react";
import "../styles/auth.css"; // קובץ עיצוב מותאם

const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); // מצב טוען
  const [error, setError] = useState(""); // הודעת שגיאה

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // התחלת טעינה
    setError(""); // איפוס שגיאות
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", { // עדכון לנתיב מלא
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        setFormData({ username: "", email: "", password: "" }); // איפוס השדות
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false); // סיום טעינה
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <Image src="/Allora.png" alt="Allora Logo" width={100} height={100} />
        <h2>Create an Account</h2>
        {error && <p className="error-message">{error}</p>} {/* הצגת שגיאה */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
