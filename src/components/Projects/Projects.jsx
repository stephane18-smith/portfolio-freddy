import React from 'react';
import { 
  FaShoppingCart, 
  FaCode, 
  FaDesktop, 
  FaDatabase, 
  FaLock,
  FaChartLine,
  FaTags,
  FaUsers,
  FaBox,
  FaCreditCard,
  FaPalette,
  FaRocket,
  FaWrench,
  FaExternalLinkAlt,
  FaGlobe,
  FaShieldAlt,
  FaStar,
  FaCrown,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaWhatsapp,
  FaCalculator,
  FaListCheck,
  FaCartShopping,
  FaMobile
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stelonne Market",
      description: "Site e-commerce complet développé en tant que développeur Full Stack. Plateforme de vente en ligne avec gestion complète des produits, fournisseurs, utilisateurs, ventes et statistiques en temps réel.",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" }
      ],
      link: "http://www.stelonne-market.online",
      features: [
        { text: "Interface utilisateur responsive et moderne", icon: <FaDesktop /> },
        { text: "Système d'authentification utilisateur sécurisé", icon: <FaLock /> },
        { text: "Gestion complète des produits et catégories", icon: <FaTags /> },
        { text: "Panier d'achat et processus de commande", icon: <FaShoppingCart /> },
        { text: "Tableau de bord administrateur avancé", icon: <FaChartLine /> },
        { text: "Gestion des fournisseurs et stocks", icon: <FaUsers /> },
        { text: "Statistiques de ventes et rapports", icon: <FaDatabase /> }
      ],
      role: "Développeur Full Stack",
      status: "En ligne",
      mainIcon: <FaShoppingCart />,
      color: "#4a5d23",
      demoLink: "http://www.stelonne-market.online"
    },
    {
      id: 2,
      title: "Maison Velarion",
      description: "Site e-commerce de luxe spécialisé dans les produits premium. Plateforme en cours de développement avec focus sur l'expérience utilisateur haut de gamme.",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" }
      ],
      link: "#",
      features: [
        { text: "Design luxueux et interface premium", icon: <FaCrown /> },
        { text: "Système de recommandation personnalisé", icon: <FaStar /> },
        { text: "Expérience d'achat immersive", icon: <FaPalette /> },
        { text: "Gestion des collections limitées", icon: <FaBox /> },
        { text: "Tableau de bord analytique avancé", icon: <FaChartLine /> },
        { text: "Intégration de paiements sécurisés", icon: <FaCreditCard /> },
        { text: "Système de fidélisation client", icon: <FaUsers /> }
      ],
      role: "Développeur Frontend & Backend",
      status: "En développement",
      mainIcon: <FaCrown />,
      color: "#b22222",
      demoLink: null
    },
    {
      id: 3,
      title: "BestFriend Commandes",
      description: "Application web de commande en ligne spécialement conçue pour les produits BestFriend. Interface intuitive avec gestion dynamique du panier et système de commande automatisé via WhatsApp.",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "Responsive Design", icon: <FaMobile />, color: "#61DAFB" }
      ],
      link: "https://votre-demo-bestfriend.com", // Remplacez par votre URL de démo
      features: [
        { text: "Gestion dynamique du panier d'achat", icon: <FaCartShopping /> },
        { text: "Calcul automatique des montants et totaux", icon: <FaCalculator /> },
        { text: "Système de commande via WhatsApp", icon: <FaWhatsapp /> },
        { text: "Précommande formatée automatiquement", icon: <FaListCheck /> },
        { text: "Interface responsive mobile-first", icon: <FaMobile /> },
        { text: "Validation des quantités et stocks", icon: <FaBox /> },
        { text: "Design moderne et épuré", icon: <FaPalette /> }
      ],
      role: "Développeur Frontend",
      status: "En ligne",
      mainIcon: <FaWhatsapp />,
      color: "#25D366",
      demoLink: "https://votre-demo-bestfriend.com" // Remplacez par votre URL de démo
    }
  ];

  const getPlaceholderIcon = (projectId) => {
    switch(projectId) {
      case 1: return '🛒';
      case 2: return '👑';
      case 3: return '💬';
      default: return '🚀';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaRocket className="section-icon" />
          Mes Projets
        </h2>
        
        <div className="projects-intro">
          <p>
            Découvrez mes projets e-commerce récents. Chaque plateforme est développée avec une attention 
            particulière aux performances, sécurité et expérience utilisateur.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-badge">
                  <span className={`status ${project.status === "En ligne" ? 'en-ligne' : 'en-developpement'}`}>
                    {project.status === "En ligne" ? (
                      <>
                        <FaGlobe /> {project.status}
                      </>
                    ) : (
                      <>
                        <FaWrench /> {project.status}
                      </>
                    )}
                  </span>
                  <span className="role">
                    <FaCode /> {project.role}
                  </span>
                </div>
                
                <div className="project-title-section">
                  <div className="project-icon" style={{ color: project.color }}>
                    {project.mainIcon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
              
              <div className="project-image">
                <div className="image-container">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <div className="placeholder-icon" style={{ color: project.color, fontSize: '4rem' }}>
                        {getPlaceholderIcon(project.id)}
                      </div>
                      <div className="placeholder-text">
                        <div className="project-name">{project.title}</div>
                        <div className="project-tech">{project.technologies.map(t => t.name).join(' | ')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>
                    <FaDesktop className="link-icon" />
                    Fonctionnalités principales
                  </h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">{feature.icon}</span>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>
                    <FaCode className="link-icon" />
                    Stack technique
                  </h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="tech-tag"
                        style={{ 
                          borderColor: tech.color,
                          background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}15)`
                        }}
                      >
                        <span className="tech-icon" style={{ color: tech.color }}>
                          {tech.icon}
                        </span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  {project.demoLink && project.status === "En ligne" && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link link-live"
                    >
                      <FaGlobe className="link-icon" />
                      {project.id === 1 ? "Visiter le site" : "Voir la démo"}
                      <FaExternalLinkAlt className="link-external" />
                    </a>
                  )}
                  
                  {project.status !== "En ligne" && (
                    <a 
                      href="#"
                      className="project-link link-coming"
                    >
                      <FaWrench className="link-icon" />
                      En développement
                    </a>
                  )}
                  
                  {project.id === 1 && project.status === "En ligne" && (
                    <div className="security-note">
                      <FaShieldAlt />
                      <div>
                        <strong>Sécurité :</strong> Authentification sécurisée & protection des données
                      </div>
                    </div>
                  )}
                  
                  {project.id === 3 && project.status === "En ligne" && (
                    <div className="whatsapp-note">
                      <FaWhatsapp />
                      <div>
                        <strong>Commande instantanée :</strong> Redirection WhatsApp avec précommande pré-remplie
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <div className="note-content">
            <h4>
              <FaRocket />
              Prochain projet en vue
            </h4>
            <p>
              Actuellement en développement d'une nouvelle plateforme e-commerce avec des fonctionnalités innovantes.
            </p>
            <p>
              <strong>Open à la collaboration :</strong> Vous avez un projet e-commerce ? Contactez-moi pour discuter de votre vision.
            </p>
            <div className="note-actions">
              <a href="#contact" className="btn link-live">
                <FaRocket />
                Discuter d'un projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;