import { useRef } from 'react';
import FadeEffect from '../../Styles/FadeEffect';
import './HeroSection.css';
import { Link as LinkRouter } from 'react-router-dom'

function HeroSection() {
    const heroTextRef = useRef(null);
    FadeEffect(heroTextRef);

    const handleEmailOpen = () => {
        const email = 'samppa@liventer.fi'; 
        const subject = encodeURIComponent('Tilauksen aihe'); 
        const body = encodeURIComponent(''); 
    
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <section className="hero" id="hero" name='heroSection'>
            <div className="container">
                <div className="hero-text fade-zoom-in" ref={heroTextRef}>
                    <h2 className="hero-subtitle">Tapahtumat toiveidesi mukaan</h2>
                    <h1 className="hero-title">GM Productions Oy</h1>
                    <button onClick={handleEmailOpen} className="hero-button">TILAA</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


