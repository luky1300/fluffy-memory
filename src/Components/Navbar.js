import React from 'react';
import { 
    Header,
    Nav,
    Logo,
    LogoImage,
    NavLinks,
    ListItems,
    NavLink,
    HomeLink 
} from '../StyledComponents/NavbarStyled'

export const Navbar = () => {

    const links = ['About', 'Gallery', 'Pricing', 'Blog', 'Contact us', 'Pages']

    return (
        <Header>
            <Nav >
                <Logo href="http://localhost:3000">
                    <LogoImage 
                    src="./img/jumbotron/logo-default-191x52.png" alt="MCLA LOGO" 
                    />
                </Logo>
                <NavLinks >
                    <ListItems >
                        <HomeLink href="http://localhost:3000">Home</HomeLink>
                    </ListItems>
                    {links.map(value => (
                        
                            <ListItems key={value}>
                                <NavLink href="http://localhost:3000">{value}</NavLink>
                            </ListItems>        
                    ))}
                </NavLinks>
            </Nav>
        </Header>
    )
}

export default Navbar