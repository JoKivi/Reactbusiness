import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <LinkRouter to="/" smooth={true} duration={500}><img src="/img/liventer_s.svg" alt="Liventer Group Logo" /></LinkRouter>
            </div>
            <button className="navbar-toggler" onClick={handleNavCollapse}>
                <span className="toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${isNavCollapsed ? 'collapsed' : 'expanded'}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <LinkScroll to="about" smooth={true} duration={500}>Tietoa</LinkScroll>
                    </li>
                    <li className="nav-item">
                        <LinkScroll to="services" smooth={true} duration={500}>Palvelut</LinkScroll>
                    </li>
                    <li className="nav-item">
                        <LinkScroll to="gallerySection" smooth={true} duration={500}>Galleria</LinkScroll>
                    </li>
                    <li className="nav-item">
                        <LinkScroll to="contacts" smooth={true} duration={500}>Yhteystiedot</LinkScroll>
                    </li>
                </ul>
                <div className="navbar-inline-button">
                    <LinkRouter to='/* entiiä mihkä menee */' className='navbar-button'>Tilaa</LinkRouter>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
