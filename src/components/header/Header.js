import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../components/assets/images/TaskPlanetLogo.png";
import pic from '../../components/assets/images/Testimonial 1.jpg';
import './Header.css'; // Import the CSS file for styling

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className='logo' alt='NC'/>
        <p><Link to='/'>Home</Link></p>
        <p><Link to="/leaderboard">Leaderboard</Link></p>
        <select>
          <option>Task</option>
          <option>All Tasks</option>
          <option>Create Task</option>
        </select>
      </div>
      <div className="header-right">
        <div className="user-info">
          <img src={pic} alt={user.name} className="profile-pic" />
          <span className="user-name">{user.name}</span>
        </div>
        <button className="logout-button">Logout</button>
        
      </div>
    </header>
  );
};

export default Header;
