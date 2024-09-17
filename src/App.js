import Avatar from '@mui/material/Avatar';
import React, { useContext, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';
import './App.css';
import appContext from './appContext';
import pic from './components/assets/images/Testimonial 1.jpg';
import Dialog from './components/Dialogbox/Dialog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import participants from './participantsData';

const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];

function App() {
  const [currentView, setCurrentView] = useState('daily');
  const [showUser,setShowUser]=useState({
    participant:{},
    showUser:false
  });

  const {activeNav}=useContext(appContext);
  console.log(activeNav)

  // Get the data based on current view (daily, weekly, monthly)

  const user = {
    name: 'John Doe',
    profilePicture: 'https://via.placeholder.com/40', // Example profile picture URL
  };

  let topThree=participants.sort((a,b)=>{
    return b[currentView].points - a[currentView].points
  }).slice(0,3);

  // let topFive=participants.map((item)=>{return item[currentView]});
    
  let topFive=participants.map((item)=> {
    let res={
      name:item.name,
      points:item[currentView].points,
      price:item[currentView].price,
      rank:item[currentView].rank,
    }
    return res
}).slice(0,5)

  return (
    <div className="App">
      <Header user={user} />
      <div className='moving-text'>
        <p className='moving-text-p'>Leader Board</p>
        {/* <marquee scrollamount='13'>Welcome To Taskplanet. Get 10 points on every referrals.</marquee> */}
        <Marquee className='marquee-tag' speed={100}>
          <p className='marquee-tag-text'>See your and others position. Collect more points to get better position.</p>
        </Marquee>
      </div>
      {/* Navigation */}
      <div className="dashboard-nav">
        <ul>
          <li className={currentView === 'daily' ? 'active' : ''} onClick={() => setCurrentView('daily')}>Daily</li>
          <li className={currentView === 'weekly' ? 'active' : ''} onClick={() => setCurrentView('weekly')}>Weekly</li>
          <li className={currentView === 'monthly' ? 'active' : ''} onClick={() => setCurrentView('monthly')}>Monthly</li>
        </ul>
      </div>


      {/* Top 3 Leaders */}
      <section className="top-three">
        <h4>🏆 Top 3 Leaders ({currentView.charAt(0).toUpperCase() + currentView.slice(1)}) 🏆</h4>
        <div className="top-leaders">
          {topThree.map((leader, index) => (
            <div className={`leader rank-${index + 1}`} key={index}>
              <Avatar alt={leader.name} src={pic} sx={{ width: 56, height: 56, marginBottom: '10px' }} />
              <div className="leader-name">{index + 1}. {leader.name}</div>
              <div className="leader-points">Points: {leader[currentView].points}</div>
            </div>
          ))} 
        </div>
      </section>

      {/* Chart Section */}
      <section className="charts-section">
        <div className="chart-container">
          <h4>Top 5 Participants ({currentView.charAt(0).toUpperCase() + currentView.slice(1)})</h4>
          <ResponsiveContainer width="100%" height={300}>
            {/* <BarChart data={currentData}> */}
            <BarChart data={topFive}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="name"
                label={{
                  value: 'Names',
                  position: 'insideBottom',
                  offset: -5,
                  style:{fill:'black'}
                }}
              />

              <YAxis
                label={{
                  value: 'Points',
                  angle: -90,              // Rotates the label to vertical
                  position: 'insideLeft',  // Position it properly on the Y-axis
                  style:{fill:'black'}
                }}
              />

              <Tooltip />

              {/* <Legend /> */}
              <Bar dataKey="points" fill="#8884d8">
                {topFive.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>


      {/* Participant List */}
      <section className="participants-list">
        <h4>All Participants ({currentView.charAt(0).toUpperCase() + currentView.slice(1)})</h4>
        <ul>
          {participants.map((participant, index) => (
            <li key={index} onClick={()=>setShowUser({participant:participant,showUser:true})}>
              <div className="participant-name">
                <Avatar alt={participant.name} src={pic} sx={{ width: 40, height: 40, marginRight: '10px' }} />
                {participant.name} <p style={{marginLeft:'5px',fontSize:'14px',color:"gray"}}>Rank :{index+1}</p>
              </div>
              <div className="participant-points">Points: {participant[currentView].points}</div>
            </li>
          ))}
        </ul>
        { 
          showUser.showUser ? <Dialog data={showUser} setShowUser={setShowUser}/> :''
        }
      </section>
      <Footer/>
    </div>
  );
}

export default App;
