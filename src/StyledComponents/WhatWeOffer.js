import styled from "styled-components";

export const WhatWeOffer = styled.section`
  margin: 40px 0;
  min-width: 30%;
`;

export const ServiceItem = styled.figure`
  border-bottom: 1px solid #44424e;
  border-top: 1px solid #44424e;
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin: 0;
  padding-top: 15px;
  transition: all 0.5s;
`;

export const ServiceItemText = styled.p`
    color: white;
    font-size: 20px;
    margin: 0;
    padding: 10px 0;


    &:hover 
    color: #756aee;
    letter-spacing: 0.2em;
`;

export const ServiceItemTriangle = styled.figure`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 10px solid #44424e;
  border-bottom: 5px solid transparent;
  margin: 10px 0;
`;
