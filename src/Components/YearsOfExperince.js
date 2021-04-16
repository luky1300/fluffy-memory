import React from 'react';
import  {Fragment} from 'react';
import '../style/YearsOfExperience.css';

function YearsOfExperience() {
    return (
    
        <Fragment>
        <section>
        <div className="exp-column" >
          <div className="num">10</div>
          <div className="years-column">
            <div className="v1"></div>
            <h3>Years of <br /> Experience </h3> 
            <p>DreamSoft is a team of highly experienced <br /> app designers and developers creating  <br/> unique software for you.</p>
            <div className="exp-btn"><a href="#"></a>Get In Touch</div>
            
            <div className="grid">
    
              <div className="grid-column">
                <div><span>2</span>
                <span>k</span></div>
                <h6>Apps Developed</h6>
              </div>
    
              <div className="grid-column">
              <div><span>40</span>
                </div>
                <h6>Consultants</h6>
              </div>
    
              <div className="grid-column-3">
                <div><span>12</span>
                  </div>
                  <h6>Awards Won</h6>
              </div>
    
    
              <div className="grid-column-4">
                <div><span>160</span>
                  </div>
                  <h6>Employees</h6>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    
        <div className="image-clients">
    
          <div className="client-box">
    <img src="./img/clients-1.png" alt=""/><a href="http://localhost:3000/"></a>        
          </div>
          <div className="client-box">
    <img src="./img/clients-2.png" alt=""/><a href="http://localhost:3000/"></a>
          </div>
          <div className="client-box">
    <img src="./img/clients-3.png" alt=""/><a href="http://localhost:3000/"></a>
          </div>
          <div className="client-box">
    <img src="./img/clients-4.png" alt=""/><a href="http://localhost:3000/"></a>
          </div>
        </div>
        </Fragment>
    

    );
};

export default YearsOfExperience;

