import React from 'react';
import ServiceCard from './ServiceCard';
import './services.css';

const services = [
    { img: "./img/karaoke.webp", title: "DJ/Karaoke" },
    { img: "./img/tapahtumatuotanto.webp", title: "Tapahtumatuotanto" },
    { img: "./img/yritys.webp", title: "Yritystapahtumat" },
    { img: "./img/erikois.webp", title: "Erikoisohjelmat" },
    { img: "./img/haat.webp", title: "Häät" }
];

function Services() {
    return (
        <section className="services">
            <div className="services-container">
                {services.map(service => <ServiceCard key={service.title} {...service} />)}
            </div>
        </section>
    );
}

export default Services;
