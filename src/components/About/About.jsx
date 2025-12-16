import React from 'react';
import { 
  FaCode, 
//   FaGraduationCap, 
  FaRocket, 
  FaLightbulb,
  FaUserTie,
  FaTools,
  FaHeart
} from 'react-icons/fa';
import './About.css';

function About() {
  const skills = [
    { name: "Développement Frontend", level: 90, icon: <FaCode /> },
    { name: "Développement Backend", level: 85, icon: <FaTools /> },
    { name: "Conception UI/UX", level: 80, icon: <FaLightbulb /> },
    { name: "Gestion de Projet", level: 75, icon: <FaUserTie /> }
  ];

//   const experiences = [
//     { year: "2023-2024", title: "Projet Stelonne Market", description: "Développement d'une plateforme e-commerce complète" },
//     { year: "2022-2023", title: "Formation Full Stack", description: "Perfectionnement en React, Node.js et bases de données" },
//     { year: "2021-2022", title: "BTS Génie Logiciel", description: "Obtention du diplôme avec mention" }
//   ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <FaUserTie className="section-icon" />
          À Propos de Moi
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>
                <FaRocket className="intro-icon" />
                Mon Parcours
              </h3>
              <p>
                <strong>Depuis petit, j'ai toujours été passionné par les nouvelles technologies.</strong> Cette passion 
                m'a naturellement conduit vers le développement web, où je peux exprimer ma créativité tout en 
                résolvant des problèmes techniques complexes.
              </p>
              <p>
                <strong>Titulaire d'un Brevet de Technicien Supérieur en Génie Logiciel</strong>, j'ai acquis une 
                solide base théorique que j'applique quotidiennement dans mes projets. Mon objectif est de créer 
                des solutions digitales qui allient performance, élégance et fonctionnalité.
              </p>
            </div>

            <div className="about-skills">
              <h4>
                <FaTools className="skills-icon" />
                Mes Compétences
              </h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, var(--color-military-green), #4a5d23)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="about-experience">
              <h4>
                <FaGraduationCap className="experience-icon" />
                Parcours & Réalisations
              </h4>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{exp.year}</div>
                    <div className="timeline-content">
                      <h5>{exp.title}</h5>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="/images/projects/stephane.png" 
                alt="Stéphane Youmbi"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <FaUserTie className="placeholder-icon" />
                  <span className="placeholder-text">Stéphane Youmbi</span>
                </div>
              </div>
            </div>
            
            <div className="image-info">
              <div className="info-item">
                <FaHeart className="info-icon" />
                <span>Passionné de code propre</span>
              </div>
              <div className="info-item">
                <FaLightbulb className="info-icon" />
                <span>Solutions innovantes</span>
              </div>
              <div className="info-item">
                <FaRocket className="info-icon" />
                <span>Projets ambitieux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;