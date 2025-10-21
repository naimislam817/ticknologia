import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin"); // "signin" or "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleClose = () => navigate("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password || (mode === "signup" && !form.name)) {
      setError("Please fill required fields.");
      return;
    }
    if (mode === "signup" && form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // demo action — replace with real auth call
    console.log(mode === "signin" ? "Login:" : "Register:", form);
    alert(`${mode === "signin" ? "Logged in (demo)" : "Registered (demo)"}`);
    setForm({ name: "", email: "", password: "", confirm: "" });
    if (mode === "signin") navigate("/");
  };

  return (
    <div className="signup-overlay" aria-modal="true" role="dialog">
      <div className="signup-panel">
        <header className="signup-header">
          <h1 className="signup-heading">Login</h1>
          <button
            className="signup-close"
            onClick={handleClose}
            aria-label="Close and return home"
            title="Return to home"
          >
            ×
          </button>
        </header>

        <div className="signup-tabs" role="tablist">
          <button
            className={`tab-btn ${mode === "signin" ? "active" : ""}`}
            onClick={() => setMode("signin")}
            role="tab"
            aria-selected={mode === "signin"}
          >
            Sign In
          </button>
          <button
            className={`tab-btn ${mode === "signup" ? "active" : ""}`}
            onClick={() => setMode("signup")}
            role="tab"
            aria-selected={mode === "signup"}
          >
            Sign Up
          </button>
        </div>

        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          {error && <div className="form-error">{error}</div>}

          {mode === "signup" && (
            <label className="field">
              <span className="label">Your name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
            </label>
          )}

          <label className="field">
            <span className="label">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span className="label">Password</span>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              required
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              minLength={6}
            />
          </label>

          {mode === "signup" && (
            <label className="field">
              <span className="label">Confirm password</span>
              <input
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                type="password"
                placeholder="Re-type password"
                required
                autoComplete="new-password"
                minLength={6}
              />
            </label>
          )}

          <div className="form-actions">
            <button className="btn primary" type="submit">
              {mode === "signin" ? "Login" : "Register"}
            </button>

            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError("");
              }}
            >
              {mode === "signin" ? "Create account" : "Have an account? Sign in"}
            </button>
          </div>
        </form>

        <footer className="signup-footer">
          <button
            className="btn-return"
            onClick={() => navigate("/")}
            title="Go back to home"
          >
            ← Return Home
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Signup;