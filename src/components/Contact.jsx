import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind? Let's create something amazing together.</p>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="label">Email</span>
              <a href="mailto:kaneki4designs@gmail.com">kaneki4designs@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="label">Phone</span>
              <a href="tel:+25079280002">+250 792 800 02</a>
            </div>

            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/kanekidesigns/" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.behance.net/kanekidesigns" className="social-link" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://www.linkedin.com/in/ahmed-atif-4267682a6/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://dribbble.com/Kanekidesigns" className="social-link" target="_blank" rel="noopener noreferrer">Dribble</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
