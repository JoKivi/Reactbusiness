import React from 'react';
import { Link } from 'react-router-dom'
import './services.css';

const services = [
    { id:0, img: "./img/esitystekniikka.webp", title: "Esitystekniikka" },
    { id:1, img: "./img/erikois.webp", title: "Erikoisohjelmat" },
    { id:2, img: "./img/yksityis.webp", title: "Yksityistilaisuudet" },
    { id:3, img: "./img/yksityis.webp", title: "Bändit" },
    { id:4, img: "./img/karaoke.webp", title: "DJ/Karaoke" },
    { id:5, img: "./img/haat.webp", title: "Frat Party" },
    { id:6, img: "./img/haat.webp", title: "Häät" },
    { id:7, img: "./img/juhlatilat.webp", title: "Juhlatilat" }

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
