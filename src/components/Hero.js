// src/components/Hero.js - Version adaptée pour vêtements, chaussures et accessoires
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiMessageCircle } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <FiStar /> Collection Exclusive 2026
        </div>
        <h1 className="hero-title fade-in-up">
          L'élégance <span className="title-gradient">à l'état pur</span>
        </h1>
        <p className="hero-subtitle fade-in-up">
          Découvrez notre collection exclusive de vêtements, chaussures et accessoires de luxe.
          Commandez maintenant et recevez vos articles en avant-première à Douala, Yaoundé et dans tout le Cameroun.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="hero-btn fade-in-up">
            Découvrir la collection
            <FiArrowRight className="btn-arrow" />
          </Link>
          <button className="hero-secondary-btn fade-in-up" onClick={() => {
            window.open('https://wa.me/237688925835', '_blank');
          }}>
            <FiMessageCircle /> Conseil personnalisé
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Authentique</span>
          </div>
          <div className="stat">
            <span className="stat-number">24h</span>
            <span className="stat-label">Livraison express</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Découvrir</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;