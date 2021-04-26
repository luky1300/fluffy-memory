import React from 'react';
import '../style/MeetTheTeam.css';

import { 
    MeetTheTeamSection,
    MeetTheTeamHeader2,
    MeetTheTeamContainer,
    MeetTheTeamBlock,
    MeetTheTeamBlockImg,
    MeetTheTeamTextBlock,
    MeetTheTeamHeader4
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
                    <MeetTheTeamHeader2>Meet The Team</MeetTheTeamHeader2>
                    <MeetTheTeamContainer>

                        {teamDept.map((team) => (

                              <MeetTheTeamBlock key={Math.random().toString(36).substr(2, 9)} >
                                    <MeetTheTeamBlockImg
                                        src={team.img_path}
                                        alt=""
                                    />
                                    <MeetTheTeamTextBlock>            
                                        <MeetTheTeamHeader4>{team.name}</MeetTheTeamHeader4> 
                                        <p className="meet-the-team-p">{team.department}</p>                    
                                    </MeetTheTeamTextBlock>
                                </MeetTheTeamBlock> 
                        ))
                        }
                    </MeetTheTeamContainer>
                </MeetTheTeamSection>
            );
};

export default MeetTheTeam;