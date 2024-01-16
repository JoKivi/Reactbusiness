import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
    const heroTextRef = useRef(null);

    useEffect(() => {
        const checkIfInView = () => {
            const element = heroTextRef.current;
            if (!element) return;

            const elementTop = element.getBoundingClientRect().top;

            // Tarkista onko sivua vieritetty vähintään 20px
            if (window.scrollY > 0) {
                if (elementTop < window.innerHeight && elementTop >= -50) {
                    element.classList.add('animate');
                } else {
                    element.classList.remove('animate');
                }
            }
        };

        window.addEventListener('scroll', checkIfInView);

        checkIfInView();

        return () => window.removeEventListener('scroll', checkIfInView);
    }, []);

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


