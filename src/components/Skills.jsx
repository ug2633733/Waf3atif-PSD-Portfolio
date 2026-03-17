import React from 'react';
import { skills } from '../data/projects';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3>Tools & Software</h3>
          <div className="tools-grid">
            <div className="tool-badge">Adobe Illustrator</div>
            <div className="tool-badge">Photoshop</div>
            <div className="tool-badge">Adobe illustrator</div>
            <div className="tool-badge">Figma</div>
            <div className="tool-badge">After Effects</div>
            <div className="tool-badge">XD</div>
          </div>
        </div>
      </div>
    </section>
  );
}
