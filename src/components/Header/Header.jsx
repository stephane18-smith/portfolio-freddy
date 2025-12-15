import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedin,
  FaTimes,
  FaBars,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaPaperPlane
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Détecter le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Détecter la section active
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <FaHome /> },
    { id: 'about', label: 'À propos', icon: <FaUser /> },
    { id: 'skills', label: 'Compétences', icon: <FaCode /> },
    { id: 'projects', label: 'Projets', icon: <FaProjectDiagram /> },
    { id: 'experience', label: 'Expérience', icon: <FaBriefcase /> },
    { id: 'contact', label: 'Contact', icon: <FaPaperPlane /> }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'poutcheustephane18@gmail.com', href: 'mailto:poutcheustephane18@gmail.com' },
    { icon: <FaPhone />, text: '+237 655 648 331', href: 'tel:+237655648331' },
    { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/stephane18_smith', external: true },
    { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://linkedin.com', external: true }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="navbar">
          {/* Logo/Brand */}
          <div className="brand">
            <div className="logo">
              <span className="logo-text">STÉPHANE</span>
              <span className="logo-dot" style={{ color: 'var(--color-red)' }}>.</span>
            </div>
            <div className="tagline">Développeur Full Stack</div>
          </div>

          {/* Navigation Desktop */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {activeSection === item.id && (
                      <span className="nav-indicator"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacts Desktop */}
          <div className="header-contacts">
            <a 
              href="mailto:poutcheustephane18@gmail.com" 
              className="contact-button"
              title="Envoyer un email"
            >
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </div>

          {/* Menu Mobile Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
          <div className="mobile-header">
            <div className="mobile-brand">
              <div className="mobile-logo">
                <span className="logo-text">STÉPHANE</span>
                <span className="logo-dot" style={{ color: 'var(--color-red)' }}>.</span>
              </div>
              <div className="mobile-tagline">Transforme vos visions en réalité</div>
            </div>
            <button 
              className="mobile-close" 
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="mobile-nav-icon">{item.icon}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-contact-section">
            <h3 className="contact-title">Contact Rapide</h3>
            <div className="mobile-contact-list">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="mobile-contact-item"
                  target={contact.external ? "_blank" : "_self"}
                  rel={contact.external ? "noopener noreferrer" : ""}
                  onClick={closeMenu}
                >
                  <span className="contact-item-icon">{contact.icon}</span>
                  <span className="contact-item-text">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-footer">
            <p className="availability">📍 Douala, Cameroun</p>
            <p className="availability">💼 Disponible pour nouvelles opportunités</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;