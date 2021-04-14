import React from 'react';
import '../style/Navbar.css'

export const Navbar = () => {

    const links = ['Home', 'About', 'Gallery', 'Pricing', 'Blog', 'Contact us', 'Pages']

    return (
        <header>
            <nav className="navbar">
                <a href="http://localhost:3000">
                    <img
                    src="./img/jumbotron/logo-default-191x52.png" alt="MCLA LOGO" 
                    />
                </a>
                <ul className="nav-links">
                    {links.map(value => (
                        value === 'Home' ? (
                            <li key={value}>
                                <a id="nav-home-link" href="http://localhost:3000">{value}</a>
                            </li>
                        ) : (
                            <li key={value}>
                                <a href="http://localhost:3000">{value}</a>
                            </li>
                        )
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar