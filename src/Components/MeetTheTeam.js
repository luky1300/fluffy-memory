import React from 'react';
import '../style/MeetTheTeam.css';

import { 
    MeetTheTeamSection,
    MeetTheTeamHeader,
    MeetTheTeamContainer,
    MeetTheTeamBlock
} from '../StyledComponents/MeetTheTeamStyled'

    const teamDept = [
                        {name: "Ryan Wilson", department: "Director of Production", img_path: "./img/ryan-wilson.jpg" },
                        {name: "Jill Peterson", department: "UI Designer", img_path: "./img/jill-peterson.jpg"},
                        {name: "Sam Robinson", department: "Senior Developer", img_path: "./img/sam-robinson.jpg"},
                        {name: "Mary Lee", department: "Software Developer", img_path: "./img/mary-lee.jpg"}
                    ];

function MeetTheTeam(){
    
    return (

                <MeetTheTeamSection>
                    <MeetTheTeamHeader>Meet The Team</MeetTheTeamHeader>
                    <MeetTheTeamContainer>

                        {teamDept.map((team) => (

                              <MeetTheTeamBlock key={Math.random().toString(36).substr(2, 9)} >
                                    <img 
                                        src={team.img_path}
                                        alt=""
                                    />
                                    <div className="meet-team-text-block">            
                                        <h4 className="meet-the-team-h4">{team.name}</h4> 
                                        <p className="meet-the-team-p">{team.department}</p>                    
                                    </div>
                                </MeetTheTeamBlock> 
                        ))
                        }
                    </MeetTheTeamContainer>
                </MeetTheTeamSection>
            );
};

export default MeetTheTeam;