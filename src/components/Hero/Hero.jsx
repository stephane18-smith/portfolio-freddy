import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">YOUMBI POUTCHEU FREDDY STEPHANE</span>
          </h1>
          <h2 className="hero-subtitle">
            Développeur Full Stack & <span className="highlight-red">Frontend React JS</span>
          </h2>
          <p className="hero-description">
            "Je transforme vos visions en réalité digitale. Passionné par les nouvelles technologies depuis mon enfance, 
            je crée des solutions web innovantes et performantes."
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">Voir mes projets</a>
            <a href="#contact" className="btn btn-secondary">Me contacter</a>
          </div>
          <div className="hero-info">
            <div className="info-item">
              <span className="info-label">Localisation :</span>
              <span className="info-value">Douala, Cameroun</span>
            </div>
            <div className="info-item">
              <span className="info-label">Disponibilité :</span>
              <span className="info-value">Disponible pour nouvelles opportunités</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email :</span>
              <span className="info-value">poutcheustephane18@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;