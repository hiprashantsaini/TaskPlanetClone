// SocialMediaTasks.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialMediaTasks = () => {
  const platforms = [
    { name: 'Instagram', icon: <FaInstagram size={30} style={{color:"orange"}}/>, points: 205 },
    { name: 'Facebook', icon: <FaFacebook size={30} style={{color:"blue"}}/>, points: 300 },
    { name: 'LinkedIn', icon: <FaLinkedin size={30} />,points: 245 },
    { name: 'LinkedIn', icon: <FaTwitter size={30} />, points: 108 },
    { name: 'Telegram', icon: <FaTelegram size={30} style={{color:"blue"}}/>, points: 305 },
    { name: 'YouTube', icon: <FaYoutube size={30} style={{color:"red"}}/>, points: 462 },
  ];

  return (
    <div className="social-media-tasks">
      <h3>Social Media Tasks</h3>
      <div className='allTasks'>
      {platforms.map((platform, index) => (
        <div className="task-item" key={index}>
          <p>{platform.icon}</p>
          <p>{platform.name}</p>
          <p style={{padding:"5px 20px",borderRadius:"10px",color:"white",backgroundColor:"#4ab004"}}>+{platform.points}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SocialMediaTasks;
