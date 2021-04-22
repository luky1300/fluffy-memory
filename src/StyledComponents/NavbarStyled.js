import styled from "styled-components";

const Header = styled.header`
position: fixed;
display: flex;
justify-content: center;
width: 100%;
z-index: 100;
height: 100px;
top: 0;
background-color: white;
box-shadow: 1px 1px 2px rgb(226, 222, 223);
`
const Nav = styled.nav`
width: 90%;
align-self: center;
height: inherit;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.a``

const LogoImage = styled.img``

const NavLinks = styled.ul`
list-style-type: none; /* Remove bullets */
width: 47%;
display: flex;
justify-content: space-between;
align-items: center;
`

const ListItems = styled.li`
display: flex;
overflow: hidden;
flex-direction: column;
position: relative;
`
const NavLink = styled.a`
text-decoration: none;
font-size: 17px;
color: #151515;
display: inline-block;
line-height: 1.5;
font-weight: 600;
letter-spacing: 0;
margin-bottom: 7px;
&:after{
  content: '';
  margin-top: 10px;
  position: absolute;
  right: 0;
  bottom: -8px;
  height: 3px;
  width: 100%;
  background-color: rgb(135, 110, 226);
  transition: 0.4s ease-out;
  box-sizing: border-box;
}
&:hover::after{
bottom: 3px;
transition: 0.3s ease-in-out;
}
`
const HomeLink = styled(NavLink)`
&:after {
  bottom: 3px;
  transition: 0.3s ease-in-out;
}
`
export {
    Header,
    Nav,
    Logo,
    LogoImage,
    NavLinks,
    ListItems,
    NavLink,
    HomeLink
}