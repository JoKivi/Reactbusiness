import React, { useState } from 'react';
import { scroller } from "react-scroll";
import {useNavigate, useLocation} from "react-router-dom";
import './Navbar.css'; 

import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [ showNav, setShowNav ] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700 });

    const scrollToPage = async (target) => {
        if (location.pathname !== '/' ) {
            await navigate('/');
        }
        scrollTarget(target);
    };

    window.addEventListener('resize', () => window.innerWidth > 1150 ? setShowNav(true) : setShowNav(false) )

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/img/liventer_s.svg" alt="Liventer Group Logo" />
            </div>
            <div className="nav-manage">
                { showNav && <AiOutlineClose className='icon' onClick={() => setShowNav(!showNav)} /> } {/* showNav true show close icon */}
                { !showNav && <RxHamburgerMenu className='icon' onClick={() => setShowNav(!showNav)} /> }  {/* showNav false show hamburger icon */}
            </div>
            <ul className='nav-list' 
                style={ showNav ? {'display':'flex'} : {'display':'none'} }
            >
                <li onClick={() => { scrollToPage('about'), setShowNav(false) } }>Tietoa</li>
                <li onClick={() => { scrollToPage('services'), setShowNav(false) }}>Palvelut</li>
                <li onClick={() => { scrollToPage('gallerySection'), setShowNav(false) }}>Galleria</li>
                <li onClick={() => { scrollToPage('contact'), setShowNav(false) }}>Yhteystiedot</li>
                <button onClick={() => { navigate('/ContactForm'), setShowNav(false) }}>Tilaa</button>
            </ul>
        </div>
    );
}

export default Navbar;
