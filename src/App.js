// import logo from './logo.svg';
import React from 'react';
import Footer from './Components/FooterComponents/Footer.js';
import MeetTheTeam from './Components/MeetTheTeam';
import Navbar from './Components/Navbar'
import AllSevices from './Components/AllServices'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Carousel</div>
      <AllSevices />
      <div>Latest Projects</div>
      <div>Achievements</div>
      < MeetTheTeam />
      <div>Get More with Us</div>
      <div>What People Say</div>
      <div>Latest Blog Posts</div>
      <Footer />
    </div>
  );
}

export default App;
