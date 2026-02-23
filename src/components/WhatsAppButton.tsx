import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa contratar una campaña visual premium.');
    window.open(`https://wa.me/34663663353?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
    </button>
  );
};

export default WhatsAppButton;
