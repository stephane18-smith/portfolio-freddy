// src/components/WhatsAppButton.js - Bouton WhatsApp bien visible avec animation 3D
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton({ phoneNumber, message }) {
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsApp}
      className="whatsapp-button"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="whatsapp-tooltip">Besoin d'aide ?</span>
    </button>
  );
}

export default WhatsAppButton;