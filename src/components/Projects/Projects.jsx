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
  FaRegCheckCircle,
  FaMobile,
  FaShoppingBasket,
  FaPhp,
  FaMoneyBillWave
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
      color: "#4a5d23"
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
      color: "#b22222"
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
      link: "https://bestfriends-b4ix.vercel.app",
      features: [
        { text: "Gestion dynamique du panier d'achat", icon: <FaShoppingBasket /> },
        { text: "Calcul automatique des montants et totaux", icon: <FaCalculator /> },
        { text: "Système de commande via WhatsApp", icon: <FaWhatsapp /> },
        { text: "Précommande formatée automatiquement", icon: <FaRegCheckCircle /> },
        { text: "Interface responsive mobile-first", icon: <FaMobile /> },
        { text: "Validation des quantités et stocks", icon: <FaBox /> },
        { text: "Design moderne et épuré", icon: <FaPalette /> }
      ],
      role: "Développeur Frontend",
      status: "En ligne",
      mainIcon: <FaWhatsapp />,
      color: "#25D366"
    },
    {
      id: 4,
      title: "MICS - Mouaha Industry Company SARL",
      description: "Site institutionnel et boutique en ligne pour Mouaha Industry Company SARL. Plateforme complète avec présentation de l'entreprise, catalogue produits et système de paiement intégré.",
      technologies: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
        { name: "API Paiement Mobile Money", icon: <FaMoneyBillWave />, color: "#4CAF50" },
        { name: "Responsive Design", icon: <FaMobile />, color: "#61DAFB" }
      ],
      link: "https://www.mouahaindustrycompanysarl.com",
      features: [
        { text: "Site vitrine institutionnel complet", icon: <FaGlobe /> },
        { text: "Boutique en ligne intégrée", icon: <FaShoppingBasket /> },
        { text: "Catalogue produits dynamique", icon: <FaBox /> },
        { text: "Paiement Mobile Money (MTN)", icon: <FaMoneyBillWave /> },
        { text: "Panier d'achat sécurisé", icon: <FaShoppingCart /> },
        { text: "Interface utilisateur responsive", icon: <FaMobile /> },
        { text: "Gestion des commandes en temps réel", icon: <FaChartLine /> }
      ],
      role: "Développeur Full Stack",
      status: "En ligne",
      mainIcon: <FaGlobe />,
      color: "#1a5276"
    }
  ];

  const getPlaceholderIcon = (projectId) => {
    switch(projectId) {
      case 1: return '🛒';
      case 2: return '👑';
      case 3: return '💬';
      case 4: return '🏭';
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
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/projects/${project.id === 1 ? 'stelonne-market' : project.id === 2 ? 'velarion' : project.id === 3 ? 'bestfriend' : 'mouaha'}.png`}
                    alt={project.title}
                    className="project-image-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = document.createElement('div');
                      placeholder.className = 'image-placeholder';
                      placeholder.innerHTML = `
                        <div class="placeholder-content">
                          <div class="placeholder-icon" style="color: ${project.color}">
                            ${getPlaceholderIcon(project.id)}
                          </div>
                          <div class="placeholder-text">
                            <div class="project-name">${project.title}</div>
                            <div class="project-tech">${project.technologies.map(t => t.name).join(' | ')}</div>
                          </div>
                        </div>
                      `;
                      e.target.parentElement.appendChild(placeholder);
                    }}
                  />
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
                          background: `linear-gradient(135deg, rgba(${parseInt(tech.color.slice(1,3), 16)}, ${parseInt(tech.color.slice(3,5), 16)}, ${parseInt(tech.color.slice(5,7), 16)}, 0.3), rgba(${parseInt(tech.color.slice(1,3), 16)}, ${parseInt(tech.color.slice(3,5), 16)}, ${parseInt(tech.color.slice(5,7), 16)}, 0.15))`
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
  <div className="links-group">
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`project-link ${project.status === "En ligne" ? 'link-live' : 'link-coming'}`}
    >
      {project.status === "En ligne" ? (
        <>
          <FaGlobe className="link-icon" />
          visiter le site
          <FaExternalLinkAlt className="link-external" />
        </>
      ) : (
        <>
          <FaWrench className="link-icon" />
          En développement
        </>
      )}
    </a>
    
    {project.id === 4 && (
      <a 
        href="https://www.mouahaindustrycompanysarl.com/boutique"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link boutique-link"
      >
        <FaShoppingBasket className="link-icon" />
        Boutique en ligne
        <FaExternalLinkAlt className="link-external" />
      </a>
    )}
  </div>
  
  {project.id === 1 && (
    <div className="security-note">
      <FaShieldAlt />
      <div>
        <strong>Sécurité :</strong> Authentification sécurisée & protection des données
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