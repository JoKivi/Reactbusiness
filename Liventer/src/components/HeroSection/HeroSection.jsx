import { useRef } from 'react';
import FadeEffect from '../../Styles/FadeEffect';
import './HeroSection.css';
import { Link as LinkRouter } from 'react-router-dom'

function HeroSection() {
    const heroTextRef = useRef(null);
    FadeEffect(heroTextRef);

    return (
        <section className="hero" id="hero" name='heroSection'>
            <div className="container">
                <div className="hero-text fade-zoom-in" ref={heroTextRef}>
                    <h2 className="hero-subtitle">Tapahtumat toiveidesi mukaan</h2>
                    <h1 className="hero-title">Liventer Group Oy</h1>
                    <LinkRouter to="/ContactForm" className="hero-button" >TILAA</LinkRouter>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


