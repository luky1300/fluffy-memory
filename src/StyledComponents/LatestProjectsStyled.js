import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  `

const Image = styled.img`.
  margin: 10px;
  width: 445px;
  height: 445px;
`

const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  text-transform: capitalize;
`

const ProjectDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 15px;
  position: relative;
  max-width: 600px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

const Navigation = styled.nav`
  align-items: center;
  justify-content: center;
  align-self: center;
  display: flex;
  font-weight:500;
  font-size: 20px;   
`

const NavigationLink = styled.ul` 
  display: flex;
  padding: 10px 10px;
  margin: 20px 20px 20px 20px;
  color: inherit;
`

const NavList= styled.li `
  list-style-type: none;
  display: inline;
  &:not(:first-child):before{
    content: " | ";
  }
`
  


export {
  Project,
  Navigation,
  NavigationLink,
  NavList,
  Image,
  ProjectTitle,
  ProjectDescription
}