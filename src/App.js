import React from "react";
import MeetTheTeam from "./Components/MeetTheTeam";
import GetMoreWithUs from "./Components/GetMoreWithUs";
import Navbar from "./Components/Navbar";
import LatestBlog from "./Components/LatestBlog";
import WhatPeopleSay from "./Components/WhatPeopleSay";
import AllSevices from "./Components/AllServices";
import LatestProjects from "./Components/LatestProjects";
import YearsOfExperience from "./Components/YearsOfExperince";
import FooterStyled from "./Components/FooterComponents/Footer.js";

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
      <FooterStyled />
    </div>
  );
}

export default App;
