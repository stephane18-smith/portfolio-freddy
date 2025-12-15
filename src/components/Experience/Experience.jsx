import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Full Stack",
      company: "MOUAHA INDUSTRY COMPANY SARL",
      period: "Novembre 2025 - Présent",
      location: "Douala, Cameroun",
      description: "Développement d'applications web complètes.",
      technologies: ["React", "MySQL", "HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Stagiaire Académique - Analyste & Conception de BD",
      company: "NEO INDUSTRY SA",
      period: "Août 2025 - Octobre 2025",
      location: "Kekem, Cameroun",
      description: "Analyse et conception des bases de données dans le département du système d'information.",
      technologies: ["MySQL", "Merise", "Analyse système"]
    },
    {
      id: 3,
      title: "Stagiaire Développeur Frontend",
      company: "NTIAG-DA",
      period: "Juin 2024 - Septembre 2024",
      location: "Douala, Cameroun",
      description: "Développement d'interfaces utilisateur avec React JS.",
      technologies: ["HTML", "CSS", "JavaScript", "Github"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;