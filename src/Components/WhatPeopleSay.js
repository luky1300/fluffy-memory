import React from 'react';
import '../style/WhatPeopleSay.css';

function WhatPeopleSay(){
    return (

    

        <section className="people">
         
          <h2>What People Say</h2>
      
    
          <div className="people-container">
            <div className="people-card">
              <article>
                <img className="circle" src="./img/user-1.jpg" alt=""/>
                <h4><a href="#">Catherine Williams</a></h4>
                <p className="people-title">Regular client</p>
                <p>
                  DreamSoft offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.
                </p>
              </article>
            </div>
          </div>
      
      
      
        
          <div className="people-container">
            <div className="people-card">
              <article>
                <img className="circle" src="./img/user-2.jpg" alt=""/>
                <h4><a href="#">Rupert Wood</a></h4>
                <p className="people-title">Regular client</p>
                <p>
                  DreamSoft powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.
                </p>
              </article>
            </div>
          </div>
      
         
          <div className="people-container">
            <div className="people-card">
              <article>
                <img className="circle" src="./img/user-3.jpg" alt=""/>
                <h4><a href="#">Samantha Brown</a></h4>
                <p className="people-title">Regular client</p>
                <p>
                  DreamSoft is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.
                </p>
              </article>
            </div>
          </div>
      
        </section>
      

    );

};
export default WhatPeopleSay;