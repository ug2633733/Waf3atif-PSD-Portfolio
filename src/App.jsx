import './App.css';
import { useState } from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectCarousel from './components/ProjectCarousel';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />;
  }

  return (
    <div className="app">
      {/* Hero Section with 3D */}
      <section className="hero-section">
        <Hero3D />
      </section>

      {/* Projects Section - Carousel */}
      <ProjectCarousel onProjectClick={setSelectedProject} />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Ahmed Atif. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
