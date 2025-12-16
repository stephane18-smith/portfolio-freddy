import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            STÉPHANE<span>.</span>
          </div>
          
          <div className="footer-tagline">
            "Je transforme vos visions en réalité"
          </div>
          
          <div className="footer-social">
            <a 
              href="https://github.com/stephane18-smith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/stephane-youmbipoutcheu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:poutcheustephane18@gmail.com" 
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} YOUMBI POUTCHEU FREDDY STEPHANE. Tous droits réservés.
          </p>
          
          <div className="footer-links">
            <a href="#home">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#projects">Projets</a>
            <a href="#contact">Contact</a>
            <a href="mailto:poutcheustephane18@gmail.com">Email</a>
            <a href="tel:+237655648331">Téléphone</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;