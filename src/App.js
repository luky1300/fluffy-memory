// import logo from './logo.svg';
import React from 'react';
import './App.css';
import MeetTheTeam from './MeetTheTeam';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Carousel</div>
      <div>All Services</div>
      <div>Latest Projects</div>
      <div>Achievements</div>
      < MeetTheTeam />
      <div>Get More with Us</div>
      <div>What People Say</div>
      <div>Latest Blog Posts</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
