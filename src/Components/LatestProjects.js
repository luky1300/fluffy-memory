import React from 'react';
import '../style/LatestProjects.css';
import {
  Project,
  Navigation,
  NavigationLink,
  NavList,
  Image,
  ProjectTitle,
  ProjectDescription
} from '../StyledComponents/LatestProjectsStyled'

function LatestProjects(){
    return (
      <>
      <div>
           <ProjectTitle>Latest projects</ProjectTitle>
           <ProjectDescription>
           In our portfolio, you can browse the latest products developed for our clients 
           for different corporate purposes. Our qualified team of interface designers 
           and software developers is always ready to create something unique for you.
           </ProjectDescription>
      </div>
      <Navigation>
              <NavigationLink>
                  <NavList>All</NavList>
                  <NavList>Mobile App</NavList>
                  <NavList>Custom Software</NavList>
                  <NavList>QA & TESTING</NavList>
                  <NavList>UX AND DESIGN</NavList>
              </NavigationLink>
      </Navigation> 
      
        <Project>
        <Image  src="./img/grid-gallery-1.jpg" alt="FinStep" />
        <Image  src="./img/grid-gallery-3.jpg" alt="MobileFinance"/>
        <Image  src="./img/fullwidth-gallery-3-420x350.jpeg" alt="Q-Manage" />
        <Image  src="./img/grid-gallery-6.jpg" alt="WeatherCast"/>
        <Image  src="./img/projects04.jpeg" alt="FinStep"/>
        <Image  src="./img/projects06.jpeg " alt="FinStep"/>
        <Image  src="./img/grid-gallery-7.jpg " alt="FinStep"/>
        <Image  src="./img/fullwidth-gallery-8-420x350.jpeg " alt="FinStep"/>
        </Project>
      </>
    );
};

export default LatestProjects;