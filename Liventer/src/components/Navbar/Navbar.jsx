import React, { useState } from 'react';
import { scroller } from "react-scroll";
import {useNavigate, useLocation} from "react-router-dom";
import './Navbar.css'; 

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [ showNav, setShowNav ] = useState(true)
    const navigate = useNavigate();
    const location = useLocation();
    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700 });

    const scrollToPage = async (target) => {
        window.innerWidth < 1150 ? setShowNav(false) : setShowNav(true)
        if (location.pathname !== '/' ) {
            await navigate('/');
        }
        scrollTarget(target);
    };

    const handleLogoClick = () => {
        navigate('/'); 
    };

    const handleEmailOpen = () => {
        const email = 'samppa@liventer.fi'; 
        const subject = encodeURIComponent('Tilauksen aihe'); 
        const body = encodeURIComponent(''); 
    
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
        if (window.innerWidth < 1150) {
            setShowNav(false); 
        } else {
            setShowNav(true); 
        }
    };

    window.addEventListener('resize', () => window.innerWidth > 1150 ? setShowNav(true) : setShowNav(false) )
    window.addEventListener('load', () => window.innerWidth > 1150 ? setShowNav(true) : setShowNav(false) )

    return (
        <div className="navbar">
            <div className="logo" onClick={handleLogoClick}>
                <img src="/img/GM_productions.svg" alt="GM Productions Oy Logo" />
            </div>
            <div className="nav-manage">
                { showNav && <AiOutlineClose className='icon' onClick={() => setShowNav(!showNav)} /> } {/* showNav true show close icon */}
                { !showNav && <RxHamburgerMenu className='icon' onClick={() => setShowNav(!showNav)} /> }  {/* showNav false show hamburger icon */}
            </div>
            <ul className='nav-list' 
                style={ showNav ? {'display':'flex'} : {'display':'none'} }
            >
                <li onClick={() => scrollToPage('about') }>Tietoa</li>
                <li onClick={() => scrollToPage('services') }>Palvelut</li>
                <li onClick={() => scrollToPage('gallerySection') }>Galleria</li>
                <li onClick={() => scrollToPage('contact') }>Yhteystiedot</li>
                <button onClick={handleEmailOpen}>Tilaa</button>
            </ul>
        </div>
    );
}

export default Navbar;