import React from 'react';
import Footer from './Components/FooterComponents/Footer.js';
import MeetTheTeam from './Components/MeetTheTeam';
import GetMoreWithUs from './Components/GetMoreWithUs';
import Navbar from './Components/Navbar';
import LatestBlog from './Components/LatestBlog';
import WhatPeopleSay from './Components/WhatPeopleSay';
import AllSevices from './Components/AllServices';
import LatestProjects from './Components/LatestProjects';
import YearsOfExperience from './Components/YearsOfExperince';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Carousel</div>
      <AllSevices />
      <LatestProjects />
      <YearsOfExperience />
      <MeetTheTeam />
      <GetMoreWithUs />
      <WhatPeopleSay />
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
