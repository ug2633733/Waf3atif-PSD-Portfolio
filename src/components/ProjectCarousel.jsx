import { useState, useRef } from 'react';
import '../styles/ProjectCarousel.css';
import project1 from '../assets/images/project1.svg';
import project2 from '../assets/images/project2.svg';
import project3 from '../assets/images/project3.svg';
import project4 from '../assets/images/project4.svg';

export default function ProjectCarousel({ onProjectClick }) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      id: 1,
      title: 'Zayna Brand Identity',
      category: 'Brand Identity • Logo • Visual System',
      emoji: '🎨',
      color: '#c961bb',
      description: 'A Skincare brand identity with comprehensive visual system',
      image: project1,
    },
    {
      id: 2,
      title: 'Young Star FC Logo Design',
      category: 'Logo Design • Branding',
      emoji: '⚽',
      color: '#1b6834',
      description: 'Football club logo design for Young Star FC, capturing energy and spirit',
      image: project2,
    },
    {
      id: 3,
      title: 'Restaurant Menu Design',
      category: 'Print • Menu • Typography',
      emoji: '🍽️',
      color: '#c9b71b',
      description: 'Premium menu design for fine dining',
      image: project3,
    },
    {
      id: 4,
      title: 'Bankak Mobile App UI Design',
      category: 'UI/UX • Mobile • App Design',
      emoji: '📱',
      color: '#9c882b',
      description: 'Redesign Bank of Khartoum (Bankak) mobile app interface',
      image: project4,
    },
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(handleScroll, 300);
    }
  };

  return (
    <section id="projects" className="projects-carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <div>
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Explore my latest work and design solutions</p>
          </div>
          <div className="carousel-controls">
            <button
              className={`carousel-arrow ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              ←
            </button>
            <button
              className={`carousel-arrow ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              →
            </button>
          </div>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel" ref={carouselRef} onScroll={handleScroll}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="carousel-item"
                onClick={() => onProjectClick(project)}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="carousel-item-overlay"></div>
                <div className="carousel-item-inner">
                  {/* Project info - centered */}
                  <div className="carousel-info">
                    <h3>{project.title}</h3>
                    <p className="carousel-category">{project.category}</p>
                    <p className="carousel-description">{project.description}</p>
                  </div>

                  {/* Color bar at bottom */}
                  <div
                    className="carousel-color-bar"
                    style={{ backgroundColor: project.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="carousel-indicators">
          <div className="indicator-dots">
            {projects.map((_, idx) => (
              <div key={idx} className="indicator-dot"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
