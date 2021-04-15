import React from 'react';
import Footer from './Components/FooterComponents/Footer.js';
import MeetTheTeam from './Components/MeetTheTeam';
import GetMoreWithUs from './Components/GetMoreWithUs';
import Navbar from './Components/Navbar';
import LatestBlog from './Components/LatestBlog';
import WhatPeopleSay from './Components/WhatPeopleSay';
import AllSevices from './Components/AllServices'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Carousel</div>
      <AllSevices />
      <div>Latest Projects</div>
      <div>Achievements</div>
      <MeetTheTeam />
      <GetMoreWithUs />
      <WhatPeopleSay />
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
