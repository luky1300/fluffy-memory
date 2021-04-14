import React from 'react';
import '../style/MeetTheTeam.css';

function MeetTheTeam(){
    
    return (

        <section className="meet-the-team-section">
            <h2 className="meet-the-team-h2">Meet The Team</h2>

            <div className="meet-the-team-main-container">

                <div className="meet-team-block">          
                    <img 
                        src="./img/ryan-wilson.jpg" 
                        alt="ryan-wilson" 
                    />
                    <div className="meet-team-text-block">            
                        <h4 className="meet-the-team-h4">Ryan Wilson</h4> 
                        <p className="meet-the-team-p">Director of Production</p>                    
                    </div>
                </div>

                <div className="meet-team-block">
                    <img src="./img/jill-peterson.jpg" alt="" />

                    <div className='meet-team-text-block'>                       
                    <h4 className="meet-the-team-h4">Jill Peterson</h4>
                    <p className="meet-the-team-p">UI Designer</p>            
                    </div>
                </div>

                <div className="meet-team-block">
                    <img src="./img/sam-robinson.jpg" alt="" />

                    <div className='meet-team-text-block'>                        
                    <h4 className="meet-the-team-h4">Sam Robinson</h4>
                    <p className="meet-the-team-p">Senior Developer</p>            
                    </div>
                </div>

                <div className="meet-team-block">
                    <img src="./img/mary-lee.jpg" alt="" />

                    <div className='meet-team-text-block'>                        
                        <h4 className="meet-the-team-h4">Mary Lee</h4>
                        <p className="meet-the-team-p">Software Developer</p>            
                    </div>
                </div>

            </div>
    </section>
    );
};

export default MeetTheTeam;