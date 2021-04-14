// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './Components/FooterComponents/Footer.js';
import MeetTheTeam from './Components/MeetTheTeam';
import GetMoreWithUs from './Components/GetMoreWithUs';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Carousel</div>
      <div>All Services</div>
      <div>Latest Projects</div>
      <div>Achievements</div>
      <MeetTheTeam />
      <GetMoreWithUs />
      <div>What People Say</div>
      <div>Latest Blog Posts</div>
      <Footer />
    </div>
  );
}

export default App;
