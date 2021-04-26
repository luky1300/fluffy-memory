import styled from 'styled-components';

const Background = styled.div`
    height: 95vh;
    background-image: url(https://ld-wt73.template-help.com/wt_prod-18959/images/slider-1-slide-1-1770x742.jpg);
    background-size: cover;
    text-align: center;
    display: grid;
    place-content: center;
  `
  
const BackgroundHeader = styled.h1`
    font-weight: 600;
    font-size: 70px;
    line-height: 2;
    color: #151515;
    text-transform: capitalize;
    letter-spacing: 0.024em;
    word-spacing: 0.05em;
  `
  
const BackgroundHeader3 = styled.h3`
    font-size: 16px;
    line-height: 2;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #151515;
  `
  
const Button = styled.button`
    margin-top: 2vh;
    color: white;
    background-color: #7c73fa;
    border-color: 1px solid #7c73fa;
    display: inline-block;
    min-width: 200px;
    padding: 17px 33px 15px;
    font-size: 16px;
    line-height: 1.34;
    font-weight: 600;
    letter-spacing: 0.075em;
    cursor: pointer;
    text-decoration: none;
  `

  export {
  Background,
  BackgroundHeader,
  BackgroundHeader3,
  Button,

  }