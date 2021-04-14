import React from 'react';
import './style/Navbar.css'

export const Navbar = () => {
    return (
        <header>
            <nav class="navbar">
                <a href="http://localhost:3000">
                    <img
                    src="./img/jumbotron/logo-default-191x52.png" alt="MCLA LOGO" 
                    />
                </a>
                <ul class="nav-links">
                    <li>
                        <a id="nav-home-link" href="http://localhost:3000">Home</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000">About</a>
                    </li>
                    <li>
                        <a  href="http://localhost:3000">Gallery</a>
                    </li>
                    <li>
                        <a  href="http://localhost:3000">Pricing</a>
                    </li>
                    <li>
                        <a  href="http://localhost:3000">Blog</a>
                    </li>
                    <li>
                        <a  href="http://localhost:3000">Contact Us</a>
                    </li>
                    <li>
                        <a  href="http://localhost:3000">Pages</a>
                    </li>
               
                </ul>
            </nav>
        </header>
    )
}

export default Navbar