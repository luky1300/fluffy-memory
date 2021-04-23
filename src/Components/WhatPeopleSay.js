import React from 'react';
import {
  People,
    HeadingHeader,
    PeopleContainer,
    PeopleCard,
    HeaderCard,
    HeaderParagraph,
    PeopleTitle,
} from '../StyledComponents/WhatPeopleSayStyled';

function WhatPeopleSay(){
    return (

    

        <People>
         
          <HeadingHeader>What People Say</HeadingHeader>
      
    
          <PeopleContainer>
            <PeopleCard>
              <article>
                <img className="circle" src="./img/user-1.jpg" alt=""/>
                <HeaderCard><a href="#">Catherine Williams</a></HeaderCard>
                <PeopleTitle>Regular client</PeopleTitle>
                <HeaderParagraph>
                  DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
                </HeaderParagraph>
              </article>
            </PeopleCard>
          </PeopleContainer>
      
      
      
        
          <PeopleContainer>
            <PeopleCard>
              <article>
                <img className="circle" src="./img/user-2.jpg" alt=""/>
                <HeaderCard><a href="#">Rupert Wood</a></HeaderCard>
                <PeopleTitle>Regular client</PeopleTitle>
                <HeaderParagraph>
                  DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.
                </HeaderParagraph>
              </article>
            </PeopleCard>
          </PeopleContainer>
      
         
          <PeopleContainer>
            <PeopleCard>
              <article>
                <img className="circle" src="./img/user-3.jpg" alt=""/>
                <HeaderCard><a href="#">Samantha Brown</a></HeaderCard>
                <PeopleTitle>Regular client</PeopleTitle>
                <HeaderParagraph>
                  DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.
                </HeaderParagraph>
              </article>
            </PeopleCard>
          </PeopleContainer>
      
        </People>
      

    );

};
export default WhatPeopleSay;