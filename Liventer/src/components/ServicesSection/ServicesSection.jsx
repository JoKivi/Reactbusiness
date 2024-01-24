import React from 'react';
import { Link } from 'react-router-dom'
import './services.css';

const services = [
    { id:0, img: "./img/karaoke.webp", title: "DJ/Karaoke" },
    { id:1, img: "./img/tapahtumatuotanto.webp", title: "Tapahtumatuotanto" },
    { id:2, img: "./img/yritys.webp", title: "Yritystapahtumat" },
    { id:3, img: "./img/erikois.webp", title: "Erikoisohjelmat" },
    { id:4, img: "./img/haat.webp", title: "Häät" }
];

const Services = () => {

    const convertToUrlFriendly = (title) => {
        return title
            .normalize("NFD") // Normalisoi ääkköset erillisiksi merkeiksi
            .replace(/[\u0300-\u036f]/g, "") // Poistaa diakriittiset merkit (kuten ääkkösten aksentit)
            .replace(/\s+/g, '-') // Korvaa välilyönnit väliviivalla
            .replace(/[^a-z0-9\-]/gi, ''); // Poistaa kaikki muut merkit paitsi kirjaimet, numerot ja väliviivat
    }

    return (
        <div className="services">

            <div className="services-container">
                {services.map(( service ) => 
                    <Link to={`/${convertToUrlFriendly(service.title)}`}  className="service-card-link" key={service.id}>
                        <div className="service-card">
                            <img src={service.img} alt={service.title} />
                            <h5>{service.title}</h5>
                        </div>
                    </Link>
                )}

            </div>
        </div>
    );
}

export default Services;
