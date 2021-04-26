import React from 'react'
import {
  Background,
  BackgroundHeader,
  BackgroundHeader3,
  Button,

} from '../CarouselComponents/CarouselStyled';

function Carousel(){
    return(

        <Background>
        <div>
          <BackgroundHeader>Mobile App Development</BackgroundHeader>
        <BackgroundHeader3>Since our establishment, we have been delivering high-quality and sustainable</BackgroundHeader3>
        <BackgroundHeader3> software solutions for corporate purposes of worldwide businesses.</BackgroundHeader3>
        <center>
          <Button href="/">GET IN TOUCH</Button>
        </center>
        </div>
        
      </Background>

    );
};

export default Carousel;