import React, { useState } from "react";
import "./ContactUsdetail.css";

function ContactUsdetail() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim()) {
      setStatus("Please fill in Name, Email and Subject.");
      return;
    }
    // Basic email check
    const emailValid = /\S+@\S+\.\S+/.test(form.email);
    if (!emailValid) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Message sent (demo).");
    console.log("Contact form data:", form);
    setForm({ name: "", email: "", subject: "", message: "" })

    // clear status after short delay
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <h1 id="contact-heading" className="contact-title">
          Get In Touch
        </h1>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {status && <p className="form-status">{status}</p>}

          <label className="form-row">
            <span className="label-text">Your Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              aria-required="true"
              placeholder="John Doe"
            />
          </label>

          <label className="form-row">
            <span className="label-text">Your email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              aria-required="true"
              placeholder="you@example.com"
            />
          </label>

          <label className="form-row">
            <span className="label-text">Subject</span>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              required
              aria-required="true"
              placeholder="Subject of your message"
            />
          </label>

          <label className="form-row">
            <span className="label-text">Your message (optional)</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message..."
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn-send">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactUsdetail;

