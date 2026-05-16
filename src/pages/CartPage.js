// src/pages/CartPage.js - Version avec frais de livraison inclus dans le total
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import './CartPage.css';

function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    cartCount, 
    clearCart,
    updateProductSize,
    updateProductShoeSize,
    areAllProductsCustomized,
    getMissingCustomizations
  } = useCart();
  
  const shippingFee = 1000; // Frais de livraison
  const grandTotal = cartTotal + shippingFee; // Total avec livraison

  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!deliveryInfo.fullName || !deliveryInfo.phone || !deliveryInfo.address || !deliveryInfo.city) {
      alert('Veuillez remplir tous les champs de livraison');
      return;
    }

    if (!areAllProductsCustomized()) {
      const missing = getMissingCustomizations();
      alert(`Veuillez sélectionner:\n${missing.map(m => `- ${m.name}: ${m.label}`).join('\n')}`);
      return;
    }

    let message = `🛍️ *NOUVELLE COMMANDE - MD-Shop* 🛍️\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *DÉTAILS DE LA COMMANDE*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `📌 *Produit ${index + 1}:* ${item.name}\n`;
      if (item.selectedSize) {
        message += `   👕 Taille: ${item.selectedSize}\n`;
      }
      if (item.selectedShoeSize) {
        message += `   👟 Pointure: ${item.selectedShoeSize}\n`;
      }
      message += `   💰 Prix: ${item.price.toLocaleString()} FCFA\n`;
      message += `   🔢 Quantité: ${item.quantity}\n`;
      message += `   💶 Sous-total: ${(item.price * item.quantity).toLocaleString()} FCFA\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📊 *RÉCAPITULATIF*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 Sous-total: ${cartTotal.toLocaleString()} FCFA\n`;
    message += `🚚 Frais de livraison: ${shippingFee.toLocaleString()} FCFA\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💎 *TOTAL À PAYER:* ${grandTotal.toLocaleString()} FCFA\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📍 *LIVRAISON*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 *Nom:* ${deliveryInfo.fullName}\n`;
    message += `📞 *Tél:* ${deliveryInfo.phone}\n`;
    message += `🏠 *Adresse:* ${deliveryInfo.address}\n`;
    message += `🏙️ *Ville:* ${deliveryInfo.city}\n\n`;
    message += `✨ *MD-Shop - Vêtements, Chaussures & Accessoires* ✨`;

    const whatsappUrl = `https://wa.me/237688925835?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    setDeliveryInfo({
      fullName: '',
      phone: '',
      address: '',
      city: ''
    });
  };

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  const shoeSizeOptions = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-empty">
        <div className="empty-cart-content">
          <FiShoppingBag />
          <h2>Votre panier est vide</h2>
          <p>Découvrez nos produits et ajoutez-les à votre panier</p>
          <Link to="/products" className="empty-cart-btn">
            Découvrir nos produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page-container">
        <div className="cart-page-header">
          <Link to="/products" className="back-link">
            <FiArrowLeft /> Continuer mes achats
          </Link>
          <h1>Mon panier <span>({cartCount} article{cartCount > 1 ? 's' : ''})</span></h1>
        </div>

        <div className="cart-page-grid">
          {/* Liste des produits */}
          <div className="cart-products">
            <div className="cart-products-header">
              <span>Produit</span>
              <span>Prix</span>
              <span>Taille/Pointure</span>
              <span>Quantité</span>
              <span>Total</span>
              <span></span>
            </div>
            
            {cartItems.map(item => (
              <div key={item.customId || item.id} className="cart-product-row">
                <div className="cart-product-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="cart-product-category">{item.category}</p>
                  </div>
                </div>
                <div className="cart-product-price">{item.price.toLocaleString()} FCFA</div>
                
                {/* SELECTEUR TAILLE */}
                <div className="cart-product-size">
                  {item.category === 'Vêtements' && (
                    <select 
                      value={item.selectedSize || ''}
                      onChange={(e) => updateProductSize(item.customId || item.id, e.target.value)}
                      style={{ padding: '8px', borderRadius: '8px', border: '1px solid #E67E22', width: '100px' }}
                    >
                      <option value="">Taille</option>
                      {sizeOptions.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  )}
                  {item.category === 'Chaussures' && (
                    <select 
                      value={item.selectedShoeSize || ''}
                      onChange={(e) => updateProductShoeSize(item.customId || item.id, e.target.value)}
                      style={{ padding: '8px', borderRadius: '8px', border: '1px solid #E67E22', width: '100px' }}
                    >
                      <option value="">Pointure</option>
                      {shoeSizeOptions.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  )}
                  {item.category !== 'Vêtements' && item.category !== 'Chaussures' && (
                    <span style={{ color: '#999', fontSize: '12px' }}>Aucune</span>
                  )}
                </div>
                
                <div className="cart-product-quantity">
                  <button onClick={() => updateQuantity(item.customId || item.id, item.quantity - 1)}>
                    <FiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.customId || item.id, item.quantity + 1)}>
                    <FiPlus />
                  </button>
                </div>
                <div className="cart-product-total">{(item.price * item.quantity).toLocaleString()} FCFA</div>
                <button className="cart-product-remove" onClick={() => removeFromCart(item.customId || item.id)}>
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Formulaire de livraison et total */}
          <div className="cart-summary">
            <div className="cart-summary-card">
              <h3>Informations de livraison</h3>
              <div className="delivery-form">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nom complet *"
                  value={deliveryInfo.fullName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone *"
                  value={deliveryInfo.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse *"
                  value={deliveryInfo.address}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Ville *"
                  value={deliveryInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="cart-summary-card">
              <h3>Récapitulatif</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Sous-total ({cartCount} articles)</span>
                  <span>{cartTotal.toLocaleString()} FCFA</span>
                </div>
                <div className="summary-row">
                  <span>Livraison</span>
                  <span>{shippingFee.toLocaleString()} FCFA</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{grandTotal.toLocaleString()} FCFA</span>
                </div>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                <FiMessageCircle /> Commander via WhatsApp
              </button>
              <button className="clear-cart-btn" onClick={clearCart}>
                Vider le panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;