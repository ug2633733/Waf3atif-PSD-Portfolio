import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I'm Ahmed Atif, a passionate graphic designer focused on creating bold, memorable visual identities. 
          With a deep understanding of design principles and modern aesthetics, I craft solutions that elevate 
          brands and engage audiences.
        </p>
        <p className="about-text">
          My approach combines strategic thinking with creative excellence, ensuring every design project delivers 
          both beauty and functionality. I specialize in building cohesive brand systems that tell compelling 
          stories and make lasting impressions.
        </p>

        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
