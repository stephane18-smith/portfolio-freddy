// src/components/Navbar.js - Version avec lien vers contact (scroll simple)
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fonction pour scroller vers le footer
  const scrollToFooter = () => {
    setIsMenuOpen(false);
    
    // Petite pause pour laisser le temps au menu de se fermer
    setTimeout(() => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: footerPosition - 100, // -100 pour laisser un petit espace
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <nav className="navbar glass-effect">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          {/* Logo image - /images/logo.png */}
          <img src="/images/logo.png" alt="MD-Shop" className="logo-image" />
          <span className="logo-text">MD-Shop</span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            Accueil
          </Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
            Notre Collection
          </Link>
          <button onClick={scrollToFooter} className="contact-nav-link">
            Contacts
          </button>
        </div>

        <div className="nav-actions">
          {/* Une seule icône panier - redirige vers /cart */}
          <Link to="/cart" className="cart-header-icon" onClick={() => setIsMenuOpen(false)}>
            <FiShoppingBag />
            {cartCount > 0 && <span className="cart-header-count">{cartCount}</span>}
          </Link>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;