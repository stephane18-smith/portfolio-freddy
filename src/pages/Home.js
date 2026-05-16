// src/pages/Home.js - Version complète avec présentation MD-SHOP (CORRIGÉE)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, FiStar, FiHeart, FiShield, FiTruck, FiMessageCircle, 
  FiTrendingUp, FiAward, FiShoppingBag, FiLayers, FiUser 
} from 'react-icons/fi';
import { products } from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = products.slice(0, 3);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section avec effet 3D */}
      <section className="hero-3d" aria-label="Bannière principale">
        <div className="hero-bg-parallax"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        <div className="hero-3d-content" style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
        }}>
          <div className="hero-badge animate-on-scroll">
            <FiStar className="badge-icon" /> 
            <span>Collection Exclusive 2026</span>
          </div>
          <h1 className="hero-3d-title animate-on-scroll">
            Vêtements, Chaussures & Accessoires
          </h1>
          <p className="hero-3d-subtitle animate-on-scroll">
            Découvrez notre collection exclusive de vêtements, chaussures et accessoires de luxe au Cameroun.
            Commandez maintenant et recevez vos articles en avant-première à Douala, Yaoundé et dans tout le pays.
          </p>
          <div className="hero-buttons animate-on-scroll">
            <Link to="/products" className="hero-primary-btn">
              Découvrir la collection
              <FiArrowRight className="btn-icon" />
            </Link>
            <button className="hero-secondary-btn" onClick={() => {
              window.open('https://wa.me/237688925835', '_blank');
            }}>
              <FiMessageCircle /> Conseil personnalisé
            </button>
          </div>
          <div className="hero-stats animate-on-scroll">
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

      {/* Section Présentation MD-SHOP */}
      <section className="mdshop-presentation">
        <div className="mdshop-container">
          <div className="mdshop-content">
            <div className="mdshop-badge">
              <FiStar />
              <span>MD-SHOP</span>
            </div>
            
            <h2 className="mdshop-title">
              L'élégance de la haute couture <span className="mdshop-title-gradient">à portée de main</span>
            </h2>
            
            <div className="mdshop-subtitle">
              MD-SHOP
            </div>
            
            <p className="mdshop-description">
              MD-SHOP est une enseigne spécialisée dans l'univers de la mode et du prêt-à-porter, 
              qui se positionne à l'intersection de l'élégance de la haute couture et de l'accessibilité 
              du commerce moderne.
            </p>
            
            <div className="mdshop-pillars">
              <div className="mdshop-pillar">
                <div className="mdshop-pillar-icon">
                  <FiShoppingBag />
                </div>
                <h3>Approche Hybride</h3>
                <p>Présence physique et plateforme numérique fluide pour faciliter vos achats</p>
              </div>
              
              <div className="mdshop-pillar">
                <div className="mdshop-pillar-icon">
                  <FiLayers />
                </div>
                <h3>Identité Visuelle</h3>
                <p>Bleu profond et orange dynamique : fiabilité, professionnalisme, énergie et créativité</p>
              </div>
              
              <div className="mdshop-pillar">
                <div className="mdshop-pillar-icon">
                  <FiUser />
                </div>
                <h3>Philosophie Unique</h3>
                <p>Le vêtement comme extension de votre personnalité</p>
              </div>
            </div>
            
            <div className="mdshop-quote">
              <p>
                "Le vêtement n'est pas qu'un tissu, c'est une expression de soi. 
                Chez MD-SHOP, nous croyons que chacun mérite de porter l'élégance avec authenticité."
              </p>
            </div>
            
            <div className="mdshop-engagements">
              <div className="mdshop-engagement">
                <FiAward /> <span>Qualité Premium</span>
              </div>
              <div className="mdshop-engagement">
                <FiHeart /> <span>Proximité client</span>
              </div>
              <div className="mdshop-engagement">
                <FiTrendingUp /> <span>Accessibilité des prix</span>
              </div>
            </div>
            
            <div className="mdshop-signature">
              <p>— MD-SHOP, le style qui vous définit, l'expérience que vous méritez —</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-3d-section" aria-label="Nos avantages">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Pourquoi nous choisir ?</span>
            <h2 className="section-title">Une expérience unique</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiHeart className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="features-3d-grid">
            <div className="feature-3d-card card-3d animate-on-scroll">
              <div className="feature-3d-icon">
                <div className="icon-bg-glow"></div>
                <FiTruck />
              </div>
              <h3>Livraison Rapide</h3>
              <p>Expédition sous 24h à Douala, Yaoundé et partout au Cameroun.</p>
              <div className="feature-hover-effect"></div>
            </div>
            <div className="feature-3d-card card-3d animate-on-scroll">
              <div className="feature-3d-icon">
                <div className="icon-bg-glow"></div>
                <FiShield />
              </div>
              <h3>Authenticité Garantie</h3>
              <p>100% originaux, provenance certifiée. Contrôle qualité rigoureux sur chaque article.</p>
              <div className="feature-hover-effect"></div>
            </div>
            <div className="feature-3d-card card-3d animate-on-scroll">
              <div className="feature-3d-icon">
                <div className="icon-bg-glow"></div>
                <FiMessageCircle />
              </div>
              <h3>Commande Simplifiée</h3>
              <p>Commandez directement via WhatsApp. Conseil personnalisé et suivi dédié par notre équipe.</p>
              <div className="feature-hover-effect"></div>
            </div>
            <div className="feature-3d-card card-3d animate-on-scroll">
              <div className="feature-3d-icon">
                <div className="icon-bg-glow"></div>
                <FiAward />
              </div>
              <h3>Qualité Premium</h3>
              <p>Des produits sélectionnés avec soin auprès des meilleures marques de mode.</p>
              <div className="feature-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-3d-section" aria-label="Produits vedettes">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-subtitle">Nos incontournables</span>
            <h2 className="section-title">Produits populaires</h2>
            <div className="title-decoration">
              <span className="decoration-line"></span>
              <FiTrendingUp className="decoration-icon" />
              <span className="decoration-line"></span>
            </div>
          </div>
          <div className="products-3d-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="product-3d-card card-3d animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="product-3d-badge">
                  <FiStar /> Best Seller
                </div>
                <div className="product-3d-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-3d-overlay">
                    <Link to={`/product/${product.id}`} className="quick-view-btn">
                      Voir détails
                    </Link>
                  </div>
                </div>
                <div className="product-3d-info">
                  <span className="product-3d-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-3d-price">
                    <span className="current-price">{product.price.toLocaleString()} FCFA</span>
                  </div>
                  <Link to={`/product/${product.id}`} className="product-3d-btn">
                    Commander maintenant
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="see-all-container animate-on-scroll">
            <Link to="/products" className="see-all-3d-btn">
              Voir toute la collection
              <FiArrowRight className="btn-arrow-animated" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Service client */}
      <section className="services-3d-section" aria-label="Service client">
        <div className="services-parallax-bg"></div>
        <div className="container">
          <div className="services-3d-content animate-on-scroll">
            <div className="services-icon">
              <FiHeart />
            </div>
            <h2>Une question ? Besoin d'un conseil ?</h2>
            <p>Notre équipe d'experts mode est à votre disposition pour vous guider dans vos choix et vous offrir le meilleur service.</p>
            <div className="services-buttons">
              <button className="services-primary-btn" onClick={() => {
                window.open('https://wa.me/237688925835', '_blank');
              }}>
                <FiMessageCircle /> Discuter sur WhatsApp
              </button>
              <button className="services-secondary-btn" onClick={() => {
                window.location.href = 'mailto:contact@mdshop.com';
              }}>
                ✉️ Nous écrire par email
              </button>
            </div>
            <div className="services-hours">
              <span>📅 Disponible 7j/7</span>
              <span>⏰ 9h - 20h</span>
              <span>📍 Douala - Cameroun</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;