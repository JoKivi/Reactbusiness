import React from 'react';
import { scroller } from "react-scroll";
import {useNavigate, useLocation} from "react-router-dom";
import './Navbar.css'; 

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700 });

    const scrollToPage = async (target) => {
        if (location.pathname !== '/' ) {
            await navigate('/');
        }
        scrollTarget(target);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/img/liventer_s.svg" alt="Liventer Group Logo" />
            </div>
            <ul className='nav-list'>
                <li onClick={() => scrollToPage('about')}>Tietoa</li>
                <li onClick={() => scrollToPage('services')}>Palvelut</li>
                <li onClick={() => scrollToPage('gallerySection')}>Galleria</li>
                <li onClick={() => scrollToPage('contact')}>Yhteystiedot</li>
                <button onClick={() => navigate('/ContactForm')}>Tilaa</button>
            </ul>
        </div>
    );
}

export default Navbar;
