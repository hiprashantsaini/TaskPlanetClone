// App.js
import React from 'react';
import Marquee from 'react-fast-marquee';
import Footer from './footer/Footer';
import Header from "./header/Header";
import './home.css';
import Leaderboard from './Leaderboard';
import Referral from './Referral';
import SocialMediaTasks from './SocialMediaTask';
import Usergain from './Usergain';

function Home() {
  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/40', // Example profile picture URL
  };
  return (
    <div className="home">
      <Header user={user} />
      <div className='moving-text'>
        <p className='moving-text-p'>Home</p>
        {/* <marquee scrollamount='13'>Welcome To Taskplanet. Get 10 points on every referrals.</marquee> */}
        <Marquee className='marquee-tag' speed={100}>
          <p className='marquee-tag-text'>Welcome To Taskplanet. Get 10 points on every referrals.</p>
        </Marquee>
      </div>

      <Usergain />
      <Leaderboard />
      <SocialMediaTasks />
      <Referral />
      <Footer />
    </div>
  );
}

export default Home;
