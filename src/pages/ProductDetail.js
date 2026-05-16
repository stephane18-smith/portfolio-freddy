// src/pages/ProductDetail.js - Version avec sélection taille/pointure
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedShoeSize, setSelectedShoeSize] = useState('');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      history.push('/products');
    }
  }, [id, history]);

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [quantity, product]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Options de tailles pour vêtements
  const sizeOptions = {
    femme: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    homme: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    enfant: ['4 ans', '6 ans', '8 ans', '10 ans', '12 ans', '14 ans']
  };

  // Options de pointures pour chaussures
  const shoeSizeOptions = {
    femme: ['35', '36', '37', '38', '39', '40', '41', '42'],
    homme: ['38', '39', '40', '41', '42', '43', '44', '45', '46'],
    enfant: ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34']
  };

  // Obtenir les options de taille selon le produit
  const getSizeOptions = () => {
    if (!product) return [];
    if (product.name?.includes('Enfant') || product.name?.includes('Kids')) {
      return sizeOptions.enfant;
    }
    if (product.subCategory === 'Femme') {
      return sizeOptions.femme;
    }
    return sizeOptions.homme;
  };

  // Obtenir les options de pointure selon le produit
  const getShoeSizeOptions = () => {
    if (!product) return [];
    if (product.name?.includes('Enfant') || product.name?.includes('Kids')) {
      return shoeSizeOptions.enfant;
    }
    if (product.subCategory === 'Femme') {
      return shoeSizeOptions.femme;
    }
    return shoeSizeOptions.homme;
  };

  const handleAddToCart = () => {
    // Vérifier si la taille est sélectionnée pour les vêtements
    if (product.category === 'Vêtements' && !selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    
    // Vérifier si la pointure est sélectionnée pour les chaussures
    if (product.category === 'Chaussures' && !selectedShoeSize) {
      alert('Veuillez sélectionner une pointure');
      return;
    }

    // Créer l'objet produit avec les options sélectionnées
    const productWithOptions = {
      ...product,
      selectedSize: selectedSize,
      selectedShoeSize: selectedShoeSize
    };
    
    addToCart(productWithOptions, quantity);
    
    // Message de confirmation
    alert(`✅ ${product.name} ajouté au panier !`);
    
    // Réinitialiser les sélections
    setSelectedSize('');
    setSelectedShoeSize('');
    setQuantity(1);
  };

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <div className="detail-grid">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
            {!product.stock && <div className="out-of-stock-overlay">Rupture de stock</div>}
          </div>

          <div className="detail-info">
            <span className="detail-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.description}</p>
            
            <div className="detail-price-section">
              <span className="detail-price-label">Prix unitaire</span>
              <span className="detail-price">{product.price.toLocaleString()} FCFA</span>
            </div>

            <div className="detail-details">
              <h3>Détails du produit</h3>
              <p>{product.details}</p>
            </div>

            {/* Sélection de taille pour VÊTEMENTS */}
            {product.category === 'Vêtements' && (
              <div className="size-selection-section">
                <h3>Sélectionnez votre taille</h3>
                <div className="size-options">
                  {getSizeOptions().map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="required-message">Veuillez sélectionner une taille</p>
                )}
              </div>
            )}

            {/* Sélection de pointure pour CHAUSSURES */}
            {product.category === 'Chaussures' && (
              <div className="size-selection-section">
                <h3>Sélectionnez votre pointure</h3>
                <div className="size-options">
                  {getShoeSizeOptions().map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedShoeSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedShoeSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedShoeSize && (
                  <p className="required-message">Veuillez sélectionner une pointure</p>
                )}
              </div>
            )}

            {/* Accessoires - pas de sélection */}
            {product.category === 'Accessoires' && (
              <div className="accessory-note">
                <p>✨ Cet accessoire ne nécessite pas de sélection de taille</p>
              </div>
            )}

            <div className="quantity-section">
              <label>Quantité</label>
              <div className="quantity-selector">
                <button onClick={decrementQuantity} disabled={quantity <= 1}>−</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  min="1"
                  max="10"
                />
                <button onClick={incrementQuantity} disabled={quantity >= 10}>+</button>
              </div>
            </div>

            <div className="total-section">
              <span>Total :</span>
              <strong>{(totalPrice).toLocaleString()} FCFA</strong>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <WhatsAppButton phoneNumber="237688925835" message="Bonjour, je souhaite plus d'informations sur vos produits." />
    </div>
  );
}

export default ProductDetail;