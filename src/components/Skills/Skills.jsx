import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaLaravel, FaBootstrap,
  FaMobile, FaServer, FaUsers, FaComments,
  FaProjectDiagram, FaSync, FaSearch, FaBook, FaCogs,
  FaRocket, FaLaptopCode, FaChartLine
} from 'react-icons/fa';
import { 
  SiTypescript, SiMysql, SiTailwindcss,
  SiNextdotjs, SiDocker, SiAmazonaws, SiGraphql
} from 'react-icons/si';
import { 
  MdApi, MdAutoGraph, MdSchool, MdWorkspacePremium
} from 'react-icons/md';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend & UI/UX",
      skills: [
        { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", level: 88, icon: <FaJs />, color: "#F7DF1E" },
        { name: "React JS", level: 88, icon: <FaReact />, color: "#61DAFB" },
        { name: "TypeScript", level: 70, icon: <SiTypescript />, color: "#3178C6" },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", level: 85, icon: <FaBootstrap />, color: "#7952B3" },
        { name: "Responsive Design", level: 92, icon: <FaMobile />, color: "#4A5D23" }
      ]
    },
    {
      id: 2,
      title: "Backend & Bases de données",
      skills: [
        { name: "Node.js", level: 60, icon: <FaNodeJs />, color: "#339933" },
        { name: "Laravel", level: 70, icon: <FaLaravel />, color: "#FF2D20" },
        { name: "MySQL", level: 95, icon: <SiMysql />, color: "#4479A1" },
        { name: "API REST", level: 40, icon: <MdApi />, color: "#FF6B6B" },
        { name: "Architecture MVC", level: 80, icon: <FaCogs />, color: "#4ECDC4" }
      ]
    },
    {
      id: 3,
      title: "Outils & DevOps",
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", level: 88, icon: <FaGithub />, color: "#9D4EDD" },
        { name: "VS Code", level: 90, icon: <FaLaptopCode />, color: "#007ACC" },
        { name: "Déploiement", level: 78, icon: <FaRocket />, color: "#9D4EDD" }
      ]
    },
    {
      id: 4,
      title: "Soft Skills & Méthodologies",
      skills: [
        { name: "Résolution de problèmes", level: 90, icon: <FaSearch />, color: "#FF9E00" },
        { name: "Travail d'équipe", level: 88, icon: <FaUsers />, color: "#4A5D23" },
        { name: "Communication", level: 85, icon: <FaComments />, color: "#00B4D8" },
        { name: "Gestion de projet", level: 80, icon: <FaProjectDiagram />, color: "#7209B7" },
        { name: "Agile/Scrum", level: 75, icon: <FaSync />, color: "#F72585" },
        { name: "Analyse & Conception", level: 82, icon: <MdAutoGraph />, color: "#3A86FF" },
        { name: "Autodidacte", level: 95, icon: <FaBook />, color: "#FF5400" },
        { name: "Adaptabilité", level: 90, icon: <FaSync />, color: "#8338EC" }
      ]
    }
  ];

  const learningSkills = [
    { name: "Laravel (approfondissement)", icon: <FaLaravel /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "GraphQL", icon: <SiGraphql /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mes Compétences</h2>
        
        <div className="skills-intro">
          <p>
            En tant que développeur Full Stack, je maîtrise un large éventail de technologies 
            modernes. Mon expertise principale réside dans l'écosystème React et JavaScript, 
            avec une solide expérience dans le développement frontend et backend.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">
                <span className="category-icon"><FaChartLine /></span>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-skills">
          <h3 className="learning-title">
            <span className="learning-icon"><FaRocket /></span>
            En apprentissage actif
          </h3>
          <p className="learning-description">
            Je continue d'élargir mes compétences avec ces technologies émergentes :
          </p>
          <div className="learning-tags">
            {learningSkills.map((skill, index) => (
              <div key={index} className="learning-tag">
                <span className="tag-icon">{skill.icon}</span>
                <span className="tag-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon"><FaReact /></div>
            <h4>Spécialisation Frontend</h4>
            <p>
              Expertise en React JS avec une forte attention aux performances, 
              accessibilité et expérience utilisateur.
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon"><FaServer /></div>
            <h4>Stack Full Stack</h4>
            <p>
              MERN Stack (MySQL, Laravel, React, Node.js) avec de bonnes compétences 
              en développement backend.
            </p>
          </div>
          <div className="summary-card">
            <div className="summary-icon"><MdSchool /></div>
            <h4>Évolution continue</h4>
            <p>
              Apprentissage constant des nouvelles technologies et meilleures 
              pratiques de développement.
            </p>
          </div>
        </div>

        <div className="certifications">
          <h3 className="certifications-title">
            <span className="cert-icon"><MdWorkspacePremium /></span>
            Certifications & Formation
          </h3>
          <div className="certifications-list">
            <div className="certification-item">
              <div className="cert-badge">BTS</div>
              <div className="cert-details">
                <h4>Brevet de Technicien Supérieur</h4>
                <p className="cert-field">Génie Logiciel</p>
                <p className="cert-desc">
                  Formation complète en développement logiciel, algorithmique, 
                  bases de données et génie logiciel.
                </p>
              </div>
            </div>
            <div className="certification-item">
              <div className="cert-badge">React</div>
              <div className="cert-details">
                <h4>React Developer</h4>
                <p className="cert-field">Développement Frontend Avancé</p>
                <p className="cert-desc">
                  Maîtrise des hooks, contexte, performance optimization 
                  et patterns avancés React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;