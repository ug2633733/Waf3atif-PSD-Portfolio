import React, { useState } from 'react';
import '../styles/ProjectDetail.css';

import project1 from '../assets/images/project1.svg';
import project1_2 from '../assets/images/project1-2.svg';
import project1_3 from '../assets/images/project1-3.svg';
import project1_4 from '../assets/images/project1-4.svg';
import project2 from '../assets/images/project2.svg';
import project2_2 from '../assets/images/project2-2.svg';
import project2_3 from '../assets/images/project2-3.svg';
import project2_4 from '../assets/images/project2-4.svg';
import project3 from '../assets/images/project3.svg';
import project4 from '../assets/images/project4.svg';

import project1Thumb from '../assets/images/project1-thumb.png';
import project2Thumb from '../assets/images/project2-thumb.png';
import project3Thumb from '../assets/images/project3-thumb.png';
import project4Thumb from '../assets/images/project4-thumb.png';

export default function ProjectDetail({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);


  // Instagram-style carousel: 4 images per project
  const projectImages = {
    1: [project1, project1_2, project1_3, project1_4],
    2: [project2, project2_2, project2_3, project2_4],
    3: [project3, project1_2, project1_3, project1_4], // demo reuse
    4: [project4, project2_2, project2_3, project2_4], // demo reuse
  };
  const images = projectImages[project.id] || [];
  const [carouselIdx, setCarouselIdx] = useState(0);
  const showPrev = carouselIdx > 0;
  const showNext = carouselIdx < images.length - 1;

  const caseStudies = {
    1: {
      title: 'Zayna Brand Identity',
      description: 'A luxury fashion brand needed a distinctive visual identity that reflected contemporary elegance with cultural richness.',
      challenge: 'Create a brand identity that stands out in the competitive luxury fashion market while balancing modern minimalism with cultural authenticity.',
      concept: 'We developed a comprehensive visual identity based on geometric patterns inspired by traditional art forms. The concept centered on a modular design system.',
      process: 'Extensive research into brand values and target market. Created multiple conceptual directions. Iterative refinement led to a distinctive geometric mark that serves as the foundation for the entire visual system.',
      tools: ['Adobe Illustrator', 'Typography', 'Color Theory', 'Brand Guidelines'],
      results: 'The new brand identity increased brand recognition by 85% within the first year. The visual system proved flexible and scalable.'
    },
    2: {
      title: 'Coffee Shop Social Campaign',
      description: 'A specialty coffee roastery needed a cohesive social media strategy to build community and increase customer engagement.',
      challenge: 'Create engaging content that reflects the authenticity of specialty coffee culture while maintaining brand consistency.',
      concept: 'We developed a visual language centered on the coffee craftsmanship story. The concept combined close-up product photography with warm, inviting design elements.',
      process: 'Conducted user research to understand target audience needs. Created a modular design system for social posts. Strategy included daily brewing tips, customer spotlights, and seasonal campaigns.',
      tools: ['Adobe Photoshop', 'Social Media Design', 'Content Calendar', 'Brand Photography'],
      results: 'Increased Instagram followers by 250% and engagement rates by 180% within 3 months.'
    },
    3: {
      title: 'Restaurant Menu Design',
      description: 'A fine dining restaurant needed a menu redesign that reflected their culinary philosophy and elevated dining experience.',
      challenge: 'Balance typography, hierarchy, and aesthetics while maintaining practical functionality for a premium dining experience.',
      concept: 'We developed a sophisticated design system incorporating custom typography, elegant spacing, and a minimalist aesthetic.',
      process: 'Selected elegant serif typefaces for headings and clean sans-serif for body text. Used whitespace strategically to create a premium feel. Applied custom kerning for elegance.',
      tools: ['Adobe InDesign', 'Typography', 'Print Production', 'Layout Design'],
      results: 'Customer feedback highlighted the menu\'s elegance and ease of navigation. 35% increase in average check size.'
    },
    4: {
      title: 'Mobile App UI Design',
      description: 'A productivity app startup needed a beautiful, intuitive user interface that would set them apart in a competitive market.',
      challenge: 'Create a UI that felt modern and premium while maintaining excellent usability and performance.',
      concept: 'We developed a comprehensive design system including custom components, typography scales, and color systems.',
      process: 'Conducted extensive user research. Created interactive prototypes. Conducted user testing sessions. Incorporated feedback iteratively.',
      tools: ['Figma', 'UI/UX Design', 'Prototyping', 'User Testing'],
      results: 'App launched with 4.8-star rating. 50,000+ downloads within 6 months.'
    }
  };

  const caseStudy = caseStudies[project.id];

  return (
    <div className="project-detail">
      <button className="back-btn" onClick={onClose}>← Back</button>

      <div className="project-hero">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img
            className="project-thumb"
            src={
              project.id === 1 ? project1Thumb :
              project.id === 2 ? project2Thumb :
              project.id === 3 ? project3Thumb :
              project.id === 4 ? project4Thumb : ''
            }
            alt="Project thumbnail"
            style={{ width: 96, height: 96, objectFit: 'cover', borderRadius: 16, marginBottom: 24, background: '#222', display: 'block' }}
          />
          <h1>{project.title}</h1>
        </div>
        <p>{project.category}</p>
      </div>


      {/* Instagram-style Carousel */}
      <div className="project-carousel">
        <button
          className="carousel-arrow left"
          onClick={() => setCarouselIdx((i) => Math.max(i - 1, 0))}
          disabled={!showPrev}
        >&#8592;</button>
        <div className="carousel-image-wrapper" onClick={() => setSelectedImage(images[carouselIdx])}>
          <img src={images[carouselIdx]} alt={`Project visual ${carouselIdx + 1}`} className="carousel-image" />
        </div>
        <button
          className="carousel-arrow right"
          onClick={() => setCarouselIdx((i) => Math.min(i + 1, images.length - 1))}
          disabled={!showNext}
        >&#8594;</button>
      </div>

      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${carouselIdx === idx ? ' active' : ''}`}
            onClick={() => setCarouselIdx(idx)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full view" className="gallery-lightbox-img" />
        </div>
      )}

      <div className="case-study-content">
        <section className="case-section">
          <h2>Overview</h2>
          <p>{caseStudy.description}</p>
        </section>

        <section className="case-section">
          <h2>The Challenge</h2>
          <p>{caseStudy.challenge}</p>
        </section>

        <section className="case-section">
          <h2>The Concept</h2>
          <p>{caseStudy.concept}</p>
        </section>

        <section className="case-section">
          <h2>Design Process</h2>
          <p>{caseStudy.process}</p>
        </section>

        <section className="case-section">
          <h2>Tools Used</h2>
          <div className="tools-list">
            {caseStudy.tools.map((tool, idx) => (
              <span key={idx} className="tool-tag">{tool}</span>
            ))}
          </div>
        </section>

        <section className="case-section">
          <h2>Results</h2>
          <p>{caseStudy.results}</p>
        </section>
      </div>
    </div>
  );
}
