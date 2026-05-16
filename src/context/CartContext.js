// src/context/CartContext.js - Version complète et corrigée
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setCartItems(parsed);
      } catch (e) {
        console.error('Erreur chargement panier:', e);
      }
    }
  }, []);

  // Sauvegarder et calculer les totaux
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    const count = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
    setCartCount(count);
    
    const total = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
    setCartTotal(total);
  }, [cartItems]);

  // Ajouter au panier
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const customId = `${product.id}_${product.selectedSize || ''}_${product.selectedShoeSize || ''}`;
      const existing = prev.find(item => item.customId === customId);
      
      if (existing) {
        return prev.map(item =>
          item.customId === customId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, {
        id: product.id,
        customId,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        selectedSize: product.selectedSize || null,
        selectedShoeSize: product.selectedShoeSize || null,
        quantity: quantity
      }];
    });
  };

  // ⭐ FONCTION POUR MODIFIER LA TAILLE
  const updateProductSize = (customId, size) => {
    console.log('🟢 updateProductSize appelée:', { customId, size });
    setCartItems(prev =>
      prev.map(item =>
        item.customId === customId
          ? { ...item, selectedSize: size }
          : item
      )
    );
  };

  // ⭐ FONCTION POUR MODIFIER LA POINTURE
  const updateProductShoeSize = (customId, shoeSize) => {
    console.log('🟢 updateProductShoeSize appelée:', { customId, shoeSize });
    setCartItems(prev =>
      prev.map(item =>
        item.customId === customId
          ? { ...item, selectedShoeSize: shoeSize }
          : item
      )
    );
  };

  const removeFromCart = (customId) => {
    setCartItems(prev => prev.filter(item => item.customId !== customId));
  };

  const updateQuantity = (customId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(customId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.customId === customId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  const areAllProductsCustomized = () => {
    for (const item of cartItems) {
      if (item.category === 'Vêtements' && (!item.selectedSize || item.selectedSize === '')) {
        return false;
      }
      if (item.category === 'Chaussures' && (!item.selectedShoeSize || item.selectedShoeSize === '')) {
        return false;
      }
    }
    return true;
  };

  const getMissingCustomizations = () => {
    const missing = [];
    for (const item of cartItems) {
      if (item.category === 'Vêtements' && (!item.selectedSize || item.selectedSize === '')) {
        missing.push({ id: item.id, name: item.name, label: 'Taille' });
      }
      if (item.category === 'Chaussures' && (!item.selectedShoeSize || item.selectedShoeSize=== '')) {
        missing.push({ id: item.id, name: item.name, label: 'Pointure' });
      }
    }
    return missing;
  };

  // EXPORTER TOUTES LES FONCTIONS
  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateProductSize,      // ⭐ IMPORTANT
    updateProductShoeSize,  // ⭐ IMPORTANT
    clearCart,
    areAllProductsCustomized,
    getMissingCustomizations
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};