// src/components/Footer.js - Version avec id pour la section contact
import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaPinterest, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>MD-Shop</h4>
          <p>Vêtements, Chaussures & Accessoires</p>
          <p className="footer-tagline">le style qui vous définit, l'expérience que vous méritez</p>
        </div>
        <div className="footer-section">
          <h4>Liens rapides</h4>
          <a href="/">Accueil</a>
          <a href="/products">Notre Collection</a>
        </div>
        <div className="footer-section" id="contact-section">
          <h4>Contact</h4>
          <a href="tel:+237688925835" className="contact-link">
            <FaPhone /> +237 652 137 483
          </a>
          <a href="mailto:mdshop573@gmail.com" className="contact-link">
            <FaEnvelope /> md-shop@gmail.com
          </a>
          <p className="contact-link">
            <FaMapMarkerAlt /> Douala, Cameroun
          </p>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            {/* <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterest />
            </a> */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <FaTiktok />
            </a>
            <a href="https://wa.me/237688925835" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MD-Shop - Tous droits réservés | Douala - Cameroun</p>
      </div>
    </footer>
  );
}

export default Footer;