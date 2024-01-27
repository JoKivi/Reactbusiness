import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" onClick={ () => { scroll.scrollToTop(); } }>
                    <img src="/img/liventer_s.svg" alt="Liventer Group Logo" />
                </Link>
            </div>
            <button className="navbar-toggler" onClick={handleNavCollapse}>
                <span className="toggler-icon"></span>
            </button>
            <div className={`navbar-collapse ${isNavCollapsed ? 'collapsed' : 'expanded'}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/AboutSection" className="nav-link">Tietoa</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ServicesSection" className="nav-link">Palvelut</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/GallerySection" className="nav-link">Galleria</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ContactSection" className="nav-link">Yhteystiedot</Link>
                    </li>
                </ul>
                <div className="navbar-inline-button">
                    <Link to="/form" className="navbar-button">TILAA</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
