// src/pages/PortfolioHome.js - Version corrigée (imports nettoyés)
import React, { useEffect, useState } from 'react';
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiCode, FiMonitor, 
  FiDatabase, FiTool, FiAward, FiBriefcase, FiExternalLink, 
  FiArrowRight, FiUser, FiDownload, FiFileText 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import './PortfolioHome.css';

function PortfolioHome() {
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    console.log('📸 Chemins des images:');
    console.log('Photo de profil:', portfolioData.photo);
    portfolioData.projects.forEach(project => {
      console.log(`📁 ${project.name}:`, project.image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Fonction pour télécharger le CV
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/cv-professionnel.pdf';
    link.download = 'Youmbi_Poutcheu_Freddy_Stephane_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fonction pour gérer le clic sur téléphone
  const handlePhoneClick = () => {
    const userChoice = window.confirm('📞 Appeler normalement ?\n\n✅ OK = Appeler\n❌ Annuler = WhatsApp');
    if (userChoice) {
      window.location.href = `tel:${portfolioData.contact.phone.replace(/\s/g, '')}`;
    } else {
      window.open(`https://wa.me/${portfolioData.contact.phone.replace(/\s/g, '')}`, '_blank');
    }
  };

  // Gestionnaire d'erreur d'image
  const handleImageError = (projectName, imagePath) => {
    console.error(`❌ Erreur chargement image: ${projectName} - ${imagePath}`);
    setImageErrors(prev => ({ ...prev, [projectName]: true }));
  };

  // Gestionnaire de chargement réussi d'image
  const handleImageLoad = (projectName, imagePath) => {
    console.log(`✅ Image chargée: ${projectName} - ${imagePath}`);
  };

  const skillsCategories = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    backend: ['PHP', 'Node.js'],
    database: ['MySQL', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma']
  };

  return (
    <div className="portfolio-home">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-bg-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="portfolio-hero-content">
          <div className="hero-badge animate-on-scroll">
            <FiCode /> Portfolio 2025
          </div>
          <div className="hero-profile animate-on-scroll">
            <img 
              src={portfolioData.photo} 
              alt={portfolioData.name} 
              className="hero-photo"
              onError={() => console.error('❌ Photo de profil non trouvée:', portfolioData.photo)}
              onLoad={() => console.log('✅ Photo de profil chargée')}
            />
          </div>
          <h1 className="hero-title animate-on-scroll">
            <span className="title-line">Youmbi Poutcheu</span>
            <span className="title-gradient">Freddy Stephane</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll">
            Développeur Web Fullstack | React.js | PHP | Passionné par le code et l'innovation
          </p>
          <div className="hero-buttons animate-on-scroll">
            <a href="#projects" className="hero-primary-btn">
              Voir mes projets
              <FiArrowRight />
            </a>
            <button onClick={downloadCV} className="hero-download-btn">
              <FiDownload /> Télécharger mon CV
            </button>
            <a href="#contact" className="hero-secondary-btn">
              Me contacter
            </a>
          </div>
          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Années d'expérience</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction client</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">À propos</span>
            <h2 className="section-title">Qui suis-je ?</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiUser className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <div className="about-profile">
                <img 
                  src={portfolioData.photo} 
                  alt={portfolioData.name} 
                  className="about-photo"
                  onError={() => console.error('❌ Photo de profil (about) non trouvée:', portfolioData.photo)}
                />
              </div>
              <p>{portfolioData.bio}</p>
              <div className="about-info">
                <div className="info-item" onClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}>
                  <FiMail className="info-icon" />
                  <span>{portfolioData.contact.email}</span>
                </div>
                <div className="info-item" onClick={handlePhoneClick}>
                  <FiPhone className="info-icon" />
                  <span>{portfolioData.contact.phone}</span>
                </div>
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <span>{portfolioData.contact.address}</span>
                </div>
              </div>
              <div className="cv-download-section">
                <button onClick={downloadCV} className="cv-download-btn">
                  <FiFileText /> Télécharger mon CV complet (PDF)
                  <FiDownload className="download-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Mes compétences</span>
            <h2 className="section-title">Ce que je maîtrise</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiCode className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="skills-grid">
            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">
                <FiMonitor />
              </div>
              <h3>Frontend</h3>
              <div className="skill-list">
                {skillsCategories.frontend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">
                <FiDatabase />
              </div>
              <h3>Backend & Base de données</h3>
              <div className="skill-list">
                {skillsCategories.backend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
                {skillsCategories.database.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category animate-on-scroll">
              <div className="skill-category-icon">
                <FiTool />
              </div>
              <h3>Outils & Méthodologies</h3>
              <div className="skill-list">
                {skillsCategories.tools.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
                <span className="skill-tag">MERISE</span>
                <span className="skill-tag">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Mes réalisations</span>
            <h2 className="section-title">Projets récents</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiAward className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={project.id} className="project-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  {!imageErrors[project.name] ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      onError={() => handleImageError(project.name, project.image)}
                      onLoad={() => handleImageLoad(project.name, project.image)}
                    />
                  ) : (
                    <div className="image-placeholder">
                      <span>📷 Image non disponible</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Voir le site
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    Voir le projet <FiArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="timeline-section" id="experience">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Mon parcours</span>
            <h2 className="section-title">Expériences & Formation</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiBriefcase className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="timeline-grid">
            <div className="timeline-col">
              <h3 className="timeline-title">Expériences professionnelles</h3>
              {portfolioData.experiences.map((exp, index) => (
                <div key={index} className="timeline-item animate-on-scroll">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{exp.period}</span>
                    <h4>{exp.title}</h4>
                    <p className="timeline-company">{exp.company}</p>
                    <ul>
                      {exp.missions.map((mission, i) => (
                        <li key={i}>{mission}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="timeline-col">
              <h3 className="timeline-title">Formation</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="timeline-item animate-on-scroll">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{edu.period}</span>
                    <h4>{edu.degree}</h4>
                    <p className="timeline-company">{edu.school}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Me contacter</span>
            <h2 className="section-title">Parlons de votre projet</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiMail className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="contact-content animate-on-scroll">
            <div className="contact-info">
              <div className="contact-card" onClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}>
                <FiMail className="contact-icon" />
                <h3>Email</h3>
                <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
              </div>
              <div className="contact-card" onClick={handlePhoneClick}>
                <FiPhone className="contact-icon" />
                <h3>Téléphone</h3>
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`}>{portfolioData.contact.phone}</a>
                <a href={`tel:${portfolioData.contact.phone2.replace(/\s/g, '')}`}>{portfolioData.contact.phone2}</a>
                <button className="whatsapp-btn" onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/${portfolioData.contact.phone.replace(/\s/g, '')}`, '_blank');
                }}>
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
              <div className="contact-card">
                <FiMapPin className="contact-icon" />
                <h3>Localisation</h3>
                <p>{portfolioData.contact.address}</p>
              </div>
            </div>
            <div className="contact-social">
              <h3>Suivez-moi</h3>
              <div className="social-links">
                <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </a>
                <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FiLinkedin /> LinkedIn
                </a>
                <a href={portfolioData.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
              <div className="cv-download-footer">
                <button onClick={downloadCV} className="footer-cv-btn">
                  <FiDownload /> Télécharger mon CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioHome;