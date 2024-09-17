// Referral.js
import React from 'react';
import { FaCopy, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Referral = () => {
  return (
    <div className="referral-section">
      <h3>Share Your Referral Link</h3>
      <div className="referral-buttons">
        <button><FaCopy /> Copy Link</button>
        <button><FaWhatsapp /> WhatsApp</button>
        <button><FaFacebook /> Facebook</button>
        <button><FaTelegram /> Telegram</button>
      </div>
    </div>
  );
};

export default Referral;
