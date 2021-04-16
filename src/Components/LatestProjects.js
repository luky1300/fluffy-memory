import React from 'react';
import '../style/LatestProjects.css';


function LatestProjects(){
    return (
      <>
      <div>
           <h1 className="project-title">Latest projects</h1>
           <p class="project-text">
           In our portfolio, you can browse the latest products developed for our clients 
           for different corporate purposes. Our qualified team of interface designers 
           and software developers is always ready to create something unique for you.
           </p>
      </div>
      <div className="navigation">
              <ul>
                  <li>All</li>
                  <li>Mobile App</li>
                  <li>Custom Software</li>
                  <li>QA & TESTING</li>
                  <li>UX AND DESIGN</li>
              </ul>
      </div> 
      
        <div className="project-container">
        <img className="project-image" src="./img/grid-gallery-1.jpg" alt="FinStep" />
        <img className="project-image" src="./img/grid-gallery-3.jpg" alt="MobileFinance"/>
        <img className="project-image" src="./img/grid-gallery-2.jpg" alt="Q-Manage" />
        <img className="project-image" src="./img/grid-gallery-6.jpg" alt="WeatherCast"/>
        <img className="project-image" src="./img/projects04.jpeg" alt="FinStep"/>
        <img className="project-image" src="./img/projects06.jpeg " alt="FinStep"/>
        <img className="project-image" src="./img/grid-gallery-7.jpg " alt="FinStep"/>
        <img className="project-image" src="./img/grid-gallery-5.jpg " alt="FinStep"/>
        </div>
      </>
    );
};

export default LatestProjects;