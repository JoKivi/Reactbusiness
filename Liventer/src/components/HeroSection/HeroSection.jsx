import { useRef } from 'react';
import FadeEffect from '../../Styles/FadeEffect';
import './HeroSection.css';

function HeroSection() {
    const heroTextRef = useRef(null);
    FadeEffect(heroTextRef);

    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-text fade-zoom-in" ref={heroTextRef}>
                    <h2 className="hero-subtitle">Tapahtumat toiveidesi mukaan</h2>
                    <h1 className="hero-title">Liventer Group Oy</h1>
                    <a href="form.html" className="hero-button">TILAA</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;


