import React from 'react';
import './services.css';

const services = [
    { img: "./img/karaoke.webp", title: "DJ/Karaoke" },
    { img: "./img/tapahtumatuotanto.webp", title: "Tapahtumatuotanto" },
    { img: "./img/yritys.webp", title: "Yritystapahtumat" },
    { img: "./img/erikois.webp", title: "Erikoisohjelmat" },
    { img: "./img/haat.webp", title: "Haat" }
];

function ServiceCard({ img, title }) {
    const url = `/servicePage/${title.replace(/\s+/g, '-')}`; // Muuntaa otsikon URL-ystävälliseksi

    return (
        <a href={url} className="service-card-link">
            <div className="service-card">
                <img src={img} alt={title} />
                <h5>{title}</h5>
            </div>
        </a>
    );
}

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
