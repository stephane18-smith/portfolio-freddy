import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaCheck, 
  FaExclamationTriangle,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaComment,
  FaClock,
  FaLinkedin,
  FaGlobe
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [sendError, setSendError] = useState('');

  // TES IDENTIFIANTS EMAILJS
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_stephane',
    TEMPLATE_ID: 'template_stephane',
    PUBLIC_KEY: 'MvYl64zZPxFbIit4y'
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);
    setSendError('');

    // Ajoute la date actuelle
    const currentDate = new Date();
    const dateField = document.createElement('input');
    dateField.type = 'hidden';
    dateField.name = 'date';
    dateField.value = currentDate.toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    form.current.appendChild(dateField);

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('✅ Email envoyé avec succès:', result.text);
      setSendStatus('success');
      setIsSending(false);
      e.target.reset();
      
      // Supprimer le champ date ajouté
      if (dateField.parentNode) {
        dateField.parentNode.removeChild(dateField);
      }
      
      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSendStatus(null);
      }, 5000);
    }, (error) => {
      console.error('❌ Erreur lors de l\'envoi:', error.text);
      setSendStatus('error');
      setSendError(error.text || 'Une erreur est survenue lors de l\'envoi du message.');
      setIsSending(false);
      
      // Supprimer le champ date ajouté en cas d'erreur
      if (dateField.parentNode) {
        dateField.parentNode.removeChild(dateField);
      }
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'poutcheustephane18@gmail.com',
      link: 'mailto:poutcheustephane18@gmail.com',
      color: '#4a5d23',
      description: 'Contact direct'
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      content: '+237 655 648 331',
      link: 'tel:+237655648331',
      color: '#b22222',
      description: 'Appel/WhatsApp'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      content: 'Douala, Cameroun',
      link: '#',
      color: '#ffd700',
      description: 'Disponible en remote'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      content: 'stephane18-smith',
      link: 'https://github.com/stephane18-smith',
      external: true,
      color: '#6e5494',
      description: 'Voir mes projets'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      content: 'Stéphane Youmbi',
      link: 'https://www.linkedin.com/in/stephane-poutcheu-14b88829a/',
      external: true,
      color: '#0077B5',
      description: 'Profil professionnel'
    },
    {
      icon: <FaGlobe />,
      title: 'Portfolio',
      content: 'stelonne-market.online',
      link: 'http://www.stelonne-market.online',
      external: true,
      color: '#3A86FF',
      description: 'Projet principal'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        
        <div className="contact-intro">
          <p className="intro-text">
            Vous avez un projet à réaliser ? Une problématique technique à résoudre ? 
            N'hésitez pas à me contacter. Je suis disponible pour discuter de vos besoins 
            et vous proposer des solutions adaptées.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-title-wrapper">
                <h3 className="contact-info-title">
                  <FaPaperPlane className="title-icon" />
                  Mes Coordonnées
                </h3>
              </div>
              
              <div className="contact-grid">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="contact-card"
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    style={{ 
                      '--card-color': item.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="card-icon-wrapper">
                      <div className="card-icon" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="card-content">
                      <h4>{item.title}</h4>
                      <p className="card-text">{item.content}</p>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-section">
              <div className="availability-header-wrapper">
                <div className="availability-header-icon-wrapper">
                  <FaClock className="availability-icon" />
                </div>
                <h3 className="availability-title">
                  Disponibilité & Engagement
                </h3>
              </div>
              
              <div className="availability-features">
                <div className="feature">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">🚀</div>
                  </div>
                  <div className="feature-content">
                    <h4>Réponse rapide</h4>
                    <p>Je réponds sous 24 heures maximum</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">💼</div>
                  </div>
                  <div className="feature-content">
                    <h4>Flexibilité</h4>
                    <p>Freelance, CDI ou mission</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">🌍</div>
                  </div>
                  <div className="feature-content">
                    <h4>Télétravail</h4>
                    <p>Disponible pour le travail à distance</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">⚡</div>
                  </div>
                  <div className="feature-content">
                    <h4>Réactivité</h4>
                    <p>Démarrage rapide des projets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <div className="form-header-icon">
                  <FaEnvelope className="form-icon" />
                </div>
                <h3>Envoyez-moi un message</h3>
                <p className="form-subtitle">
                  Remplissez ce formulaire et je vous répondrai rapidement
                </p>
              </div>
              
              {sendStatus === 'success' && (
                <div className="alert alert-success">
                  <div className="alert-icon-wrapper">
                    <FaCheck className="alert-icon" />
                  </div>
                  <div className="alert-content">
                    <h4>✅ Message envoyé avec succès !</h4>
                    <p>Je vous répondrai à l'adresse email fournie dans les plus brefs délais.</p>
                    <p className="alert-note">
                      <small>Vous devriez recevoir une copie du message sur votre email.</small>
                    </p>
                  </div>
                </div>
              )}
              
              {sendStatus === 'error' && (
                <div className="alert alert-error">
                  <div className="alert-icon-wrapper">
                    <FaExclamationTriangle className="alert-icon" />
                  </div>
                  <div className="alert-content">
                    <h4>❌ Erreur lors de l'envoi</h4>
                    <p>{sendError || "Veuillez réessayer ou me contacter directement par email."}</p>
                    <p className="alert-note">
                      <small>
                        Si le problème persiste, contactez-moi directement à 
                        <a href="mailto:poutcheustephane18@gmail.com"> poutcheustephane18@gmail.com</a>
                      </small>
                    </p>
                  </div>
                </div>
              )}
              
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="user_name">
                      <FaUser className="input-icon" />
                      Nom complet
                      <span className="required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      placeholder="Votre nom et prénom" 
                      required 
                      disabled={isSending}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="user_email">
                      <FaAt className="input-icon" />
                      Adresse email
                      <span className="required">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      placeholder="exemple@email.com" 
                      required 
                      disabled={isSending}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">
                    <FaComment className="input-icon" />
                    Sujet du message
                    <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder="Quel est l'objet de votre message ?" 
                    required 
                    disabled={isSending}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment className="input-icon" />
                    Votre message
                    <span className="required">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Décrivez votre projet, vos besoins ou vos questions en détail..." 
                    rows="6" 
                    required
                    disabled={isSending}
                  ></textarea>
                  <div className="textarea-info">
                    <small>Décrivez votre projet le plus précisément possible pour une réponse adaptée.</small>
                  </div>
                </div>
                
                <div className="form-footer">
                  <button 
                    type="submit" 
                    className="btn btn-submit"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <span className="spinner"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                  
                  <div className="form-note">
                    <p className="note-text">
                      <strong>💡 Comment ça marche ?</strong><br />
                      1. Vous remplissez ce formulaire<br />
                      2. Je reçois votre message sur mon email<br />
                      3. Je vous réponds sous 24 heures<br />
                      4. Nous discutons de votre projet
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;