// Header.js
import React from 'react';
import { FaRupeeSign, FaUserFriends, FaWallet } from 'react-icons/fa';

const Usergain = () => {
  return (
    <div className="gain-container">
      <div className="gain-item">
        <FaWallet className='gain-item-logo' size={30} color="#0000FF" />
        <div>
          <p>Wallet</p>
          <h3>₹0</h3>
        </div>
      </div>
      <div className="gain-item">
        <FaRupeeSign className='gain-item-logo' size={30} color="#00cc00" />
        <div>
          <p>Earnings</p>
          <h3>₹0</h3>
        </div>
      </div>
      <div className="gain-item">
        <FaUserFriends className='gain-item-logo' size={30} color="#FF00FF" />
        <div>
          <p>Referrals</p>
          <h3>0</h3>
        </div>
      </div>
    </div>
  );
};

export default Usergain;
