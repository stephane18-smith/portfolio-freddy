// src/data/portfolioData.js - Version complète avec imports d'images
import profileImg from '../assets/images/profile.jpg';
import stelonneImg from '../assets/images/projects/stelonne-market.png';
import mdShoppingImg from '../assets/images/projects/md-shopping.png';
import bestfriendsImg from '../assets/images/projects/bestfriends.png';
import micBoutiqueImg from '../assets/images/projects/mic-boutique.png';

export const portfolioData = {
    name: "Youmbi Poutcheu Freddy Stephane",
    title: "Développeur Web Fullstack",
    photo: profileImg,
    bio: "Passionné par la programmation avec une expérience dans les projets de développement de plateformes, je me distingue par mon dynamisme, ma créativité et mon sens de leadership. Je suis à la recherche d’un emploi à plein temps afin de mettre mes compétences au profit d’une entreprise innovante.",
    contact: {
      email: "poutcheustephane18@gmail.com",
      phone: "+237 655 648 331",
      phone2: "+237 659 453 981",
      address: "Ndogpassi 2, Douala - Cameroun"
    },
    social: {
      github: "https://github.com/stephane18-smith",
      linkedin: "https://linkedin.com/in/stephane-poutcheu-14b88829a",
      whatsapp: "https://wa.me/237655648331"
    },
    skills: {
      languages: ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Node.js"],
      frameworks: ["React", "Bootstrap", "Tailwind CSS"],
      tools: ["Visual Studio Code", "GitHub", "Figma", "Power AMC", "Visual Basic"],
      databases: ["MySQL", "MongoDB", "PostgreSQL"],
      methodologies: ["MERISE", "Agile/Scrum", "UML"]
    },
    languages: [
      { name: "Français", level: "Intermédiaire" },
      { name: "Anglais", level: "Intermédiaire" },
      { name: "Espagnol", level: "Scolaire" }
    ],
    interests: ["Football", "Vélo", "Lecture", "Danse", "Chant"],
    education: [
      {
        period: "Août 2025 - Présent",
        degree: "BTS (filière Génie Logiciel)",
        school: "Institut Universitaire du Golfe de Guinée (IUG)",
        location: "Douala, Cameroun"
      },
      {
        period: "Juillet 2022",
        degree: "Baccalauréat (série D)",
        school: "Collège Henri Dumont",
        location: "Douala, Cameroun"
      }
    ],
    experiences: [
      {
        period: "11 Novembre 2025 - 04 Mars 2026",
        title: "Stagiaire Développeur Web",
        company: "Mouaha Industry Company Sarl (MIC)",
        location: "Douala, Cameroun",
        missions: [
          "Création d'une boutique en ligne complète",
          "Implémentation d'API de paiement",
          "Réalisation des interfaces du site web responsive"
        ]
      },
      {
        period: "04 Août 2025 - 03 Octobre 2025",
        title: "Stagiaire Académique en Génie Logiciel",
        company: "Neo Industry S.A.",
        location: "Douala, Cameroun",
        missions: [
          "Digitalisation des processus de conditionnement des produits",
          "Création et gestion d'une base de données",
          "Création d'une API pour générer et stocker des signatures numériques",
          "Création d'une application de gestion des incidents"
        ]
      },
      {
        period: "Juin 2023 - Septembre 2023",
        title: "Stagiaire Académique en Génie Logiciel",
        company: "NTIAG-DA",
        location: "Douala, Cameroun",
        missions: [
          "Programmation web (HTML, CSS, JavaScript, PHP)",
          "Maitrise des concepts de MERISE",
          "Développement orienté PHP"
        ]
      }
    ],
    projects: [
      {
        id: 1,
        name: "Stelonne Market",
        description: "Boutique en ligne complète avec système de panier et paiement intégré",
        tech: ["React.js", "Node.js", "MongoDB"],
        image: stelonneImg,
        link: "https://stelonne-market.online",
        year: "2025"
      },
      {
        id: 2,
        name: "MD Shopping",
        description: "Plateforme e-commerce de vêtements, chaussures et accessoires avec commande par WhatsApp",
        tech: ["React.js", "CSS3", "WhatsApp API", "LocalStorage"],
        image: mdShoppingImg,
        link: "https://md-shopping.vercel.app",
        github: "https://github.com/stephane18-smith/md-shop",
        year: "2025"
      },
      {
        id: 3,
        name: "Best Friends",
        description: "Site de précommande de produits d'entretien avec interface moderne",
        tech: ["HTML", "CSS3", "js", "Vercel"],
        image: bestfriendsImg,
        link: "https://bestfriends-b4ix.vercel.app",
        github: "https://github.com/stephane18-smith/bestfriends",
        year: "2025"
      },
      {
        id: 4,
        name: "MIC Boutique",
        description: "Boutique en ligne pour Mouaha Industry Company",
        tech: ["HTML", "PHP", "CSS", "JS", "LWS", "Bootstrap", "MySQL"],
        image: micBoutiqueImg,
        link: "https://mouahaindustrycompanysarl.com/boutique",
        year: "2025"
      }
    ]
  };