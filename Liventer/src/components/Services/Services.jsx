import React from 'react';
import './services.css';

const services = [
    { img: "./img/karaoke.webp", title: "DJ/Karaoke" },
    { img: "./img/tapahtumatuotanto.webp", title: "Tapahtumatuotanto" },
    { img: "./img/yritys.webp", title: "Yritystapahtumat" },
    { img: "./img/erikois.webp", title: "Erikoisohjelmat" },
    { img: "./img/haat.webp", title: "Häät" }
];

function convertToUrlFriendly(title) {
    return title
      .normalize("NFD") // Normalisoi ääkköset erillisiksi merkeiksi
      .replace(/[\u0300-\u036f]/g, "") // Poistaa diakriittiset merkit (kuten ääkkösten aksentit)
      .replace(/\s+/g, '-') // Korvaa välilyönnit väliviivalla
      .replace(/[^a-z0-9\-]/gi, ''); // Poistaa kaikki muut merkit paitsi kirjaimet, numerot ja väliviivat
  }
  
  

function ServiceCard({ img, title }) {
    const url = `/servicePage/${convertToUrlFriendly(title)}`;

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
