import React from 'react';
import '../style/MeetTheTeam.css';

    const teamDept = [
                        {name: "Ryan Wilson", department: "Director of Production", img_path: "./img/ryan-wilson.jpg" },
                        {name: "Jill Peterson", department: "UI Designer", img_path: "./img/jill-peterson.jpg"},
                        {name: "Sam Robinson", department: "Senior Developer", img_path: "./img/sam-robinson.jpg"},
                        {name: "Mary Lee", department: "Software Developer", img_path: "./img/mary-lee.jpg"}
                    ];

function MeetTheTeam(){
    
    return (

                <section className="meet-the-team-section">
                    <h2 className="meet-the-team-h2">Meet The Team</h2>
                    <div className="meet-the-team-main-container">

                        {teamDept.map((team) => (

                              <div key={Math.random().toString(36).substr(2, 9)} className="meet-team-block">
                                    <img 
                                        src={team.img_path}
                                        alt=""
                                    />
                                    <div className="meet-team-text-block">            
                                        <h4 className="meet-the-team-h4">{team.name}</h4> 
                                        <p className="meet-the-team-p">{team.department}</p>                    
                                    </div>
                                </div> 
                        ))
                        }
                    </div>
                </section>
            );
};

export default MeetTheTeam;