import React from 'react';
import './style/MeetTheTeam.css';

function MeetTheTeam(){
    
    return (

        <section class="meet-the-team-section">
            <h2 class="meet-the-team-h2">Meet The Team</h2>

            <div class="meet-the-team-main-container">

                <div class="meet-team-block">          
                    <img 
                        src="./img/ryan-wilson.jpg" 
                        alt="ryan-wilson" 
                    />
                    <div class="meet-team-text-block">            
                        <h4 class="meet-the-team-h4">Ryan Wilson</h4> 
                        <p class="meet-the-team-p">Director of Production</p>                    
                    </div>
                </div>

                <div class="meet-team-block">
                    <img src="./img/jill-peterson.jpg" alt="" />

                    <div class='meet-team-text-block'>                       
                    <h4 class="meet-the-team-h4">Jill Peterson</h4>
                    <p class="meet-the-team-p">UI Designer</p>            
                    </div>
                </div>

                <div class="meet-team-block">
                    <img src="./img/sam-robinson.jpg" alt="" />

                    <div class='meet-team-text-block'>                        
                    <h4 class="meet-the-team-h4">Sam Robinson</h4>
                    <p class="meet-the-team-p">Senior Developer</p>            
                    </div>
                </div>

                <div class="meet-team-block">
                    <img src="./img/mary-lee.jpg" alt="" />

                    <div class='meet-team-text-block'>                        
                        <h4 class="meet-the-team-h4">Mary Lee</h4>
                        <p class="meet-the-team-p">Software Developer</p>            
                    </div>
                </div>

            </div>
    </section>
    );
};

export default MeetTheTeam;