import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-left">
          <a href="#" className="footer-link" style={{display:"flex",alignItems:"center",gap:"5px"}}><FaHome size={24} />Home</a>
          <a href="#" className="footer-link">Leaderboard</a>
          <a href="#" className="footer-link">Rewards</a>
          <a href="#" className="footer-link">Premium Membership</a>
          <a href="#" className="footer-link">My Leads</a>
        </div>
        <div className="footer-section footer-center">
          <button className="footer-btn">
            ➕ Add Task
          </button>
        </div>
        <div className="footer-section footer-right">
          <a href="#" className="footer-link">Settings</a>
          <a href="#" className="footer-link">Profile</a>
          <a href="#" className="footer-link">Help</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
