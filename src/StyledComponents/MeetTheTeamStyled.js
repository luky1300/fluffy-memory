import styled from "styled-components";

export const MeetTheTeamSection = styled.section`
    font-family: 'Poppins', sans-serif;
    margin-bottom: 100px;
    margin-top: 100px;
`;

export const MeetTheTeamHeader2 = styled.h2`
    font-size: 42px;
    font-weight: 500;
    line-height: 1.66667;
    text-align: center;
`;

export const MeetTheTeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const MeetTheTeamBlock = styled.div`
    display: flex;
    margin: auto;
    position: relative;
`;

export const MeetTheTeamBlockImg = styled.img`
    filter: grayscale(100%);
    height: auto;
    margin: 0;
    :hover {
        filter: grayscale(0%);
    }
`;

export const MeetTheTeamTextBlock = styled.div`
  background-color: #11111180;
  bottom: 10px;
  color: white;
  padding: 10px;
  position: absolute;
  text-align: center;
  transition: transform 0.2s ease-in;
  width: 300px;
  z-index: 20;
  :hover {
    width: 350px;
  }
`;

export const MeetTheTeamHeader4 = styled.h4`
  font-size: 21px;
  font-weight: 400;
  margin: 0;
  :hover{
    color: #7c73fa;
    transition: all 0.3s;
    cursor: pointer; 
  }
`;

export const MeetTheTeamPara = styled.p `
  font-weight: 400;
  letter-spacing: 0.025em;
  line-height: 1.5;
  margin: 0;
  color: white;
`;