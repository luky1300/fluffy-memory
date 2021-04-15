// import logo from './logo.svg';
import React from 'react';
import Footer from './Components/FooterComponents/Footer.js';
import MeetTheTeam from './Components/MeetTheTeam';
import GetMoreWithUs from './Components/GetMoreWithUs';
import Navbar from './Components/Navbar';
import LatestBlog from './Components/LatestBlog';

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
     <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
