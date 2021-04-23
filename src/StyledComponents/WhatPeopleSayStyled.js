import styled from "styled-components";

const People = styled.section` 
    padding-bottom: 15%;
    padding-left: 1%;
    margin: 0 5px;
    `
    
const HeadingHeader = styled.h2`
    text-align: center;
    padding-top: 2.0rem;
    padding-bottom: 3.5rem;
    font-size: 2.6em;
    font-weight: normal;
`
    
const PeopleContainer = styled.div`
      float: left;
      width: 33%;
      padding: 0 20px;
    `
    
const PeopleCard = styled.div`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 17px;
      text-align: justify;
      background-color: white;
    `
    
const HeaderCard = styled.h4`
      display: inline-block;
      padding-left: 5%;
      position:relative; top:-40px;
      font-size: 24px;
      font-weight: lighter;
      font-family: sans-serif;
       a:hover, a:focus, a:active 
        text-decoration: none;
        color: inherit;
    `
    
const HeaderParagraph = styled.p`
      margin-top: -10px;
      font-size: 15px;
    `
    
    
    
const PeopleTitle = styled.p`
      padding-left: 26%;
      position: relative; top:-30px;
      color: #756aee;
    `






export {
    People,
    HeadingHeader,
    PeopleContainer,
    PeopleCard,
    HeaderCard,
    HeaderParagraph,
    PeopleTitle,
}