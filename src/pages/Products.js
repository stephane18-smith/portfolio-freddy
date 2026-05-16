// src/pages/Products.js - Version simplifiée avec recherche qui fonctionne
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiSearch, FiFilter, FiX, FiPlus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './Products.css';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  // Extraire les catégories uniques
  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category))];
  }, []);

  // Filtrer les produits
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filtre par catégorie
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtre par recherche (sur le nom)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setShowFilters(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  const getProductCountText = () => {
    const count = filteredProducts.length;
    if (count === 0) return 'Aucun produit trouvé';
    return `${count} produit${count > 1 ? 's' : ''}`;
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Notre Collection</h1>
        <p>Découvrez notre collection exclusive de vêtements, chaussures et accessoires</p>
      </div>
      
      <div className="products-container">
        <div className="search-filters-section">
          <div className="search-bar-container">
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  <FiX />
                </button>
              )}
            </div>
            <button 
              className={`filter-toggle-btn ${selectedCategory ? 'active-filter-btn' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter />
              <span>Filtrer</span>
            </button>
          </div>

          {(searchTerm || selectedCategory) && (
            <div className="selected-filters-bar">
              <span>Filtres actifs :</span>
              <div className="selected-filters-list">
                {selectedCategory && (
                  <span className="selected-filter-chip">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('')}>✕</button>
                  </span>
                )}
                {searchTerm && (
                  <span className="selected-filter-chip">
                    "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}>✕</button>
                  </span>
                )}
                <button className="clear-all-filters-btn" onClick={clearFilters}>
                  Tout effacer
                </button>
              </div>
            </div>
          )}

          {showFilters && (
            <div className="filters-container active">
              <div className="categories-list">
                <button
                  className={`category-chip ${!selectedCategory ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('')}
                >
                  Tous ({products.length})
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat} ({products.filter(p => p.category === cat).length})
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="results-count">
            {getProductCountText()}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid-full">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card-full">
                <div className="product-image-full">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-overlay">
                    <Link to={`/product/${product.id}`} className="overlay-btn">
                      <FiEye /> Voir
                    </Link>
                  </div>
                </div>
                <div className="product-info-full">
                  <span className="product-category-full">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="product-price-full">{product.price.toLocaleString()} FCFA</div>
                  <div className="product-buttons">
                    <Link to={`/product/${product.id}`} className="product-detail-btn">
                      <FiEye />
                    </Link>
                    <button onClick={() => handleAddToCart(product)} className="product-add-cart-btn">
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <p>Aucun produit ne correspond à votre recherche.</p>
            <button onClick={clearFilters}>Voir tous les produits</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;