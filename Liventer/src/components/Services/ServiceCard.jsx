import React from 'react';
import { Link } from 'react-router-dom';

function convertToUrlFriendly(title) {
    return title
        .normalize("NFD") // Normalisoi ääkköset erillisiksi merkeiksi
        .replace(/[\u0300-\u036f]/g, "") // Poistaa diakriittiset merkit (kuten ääkkösten aksentit)
        .replace(/\s+/g, '-') // Korvaa välilyönnit väliviivalla
        .replace(/[^a-z0-9\-]/gi, ''); // Poistaa kaikki muut merkit paitsi kirjaimet, numerot ja väliviivat
}

function ServiceCard({ img, title }) {
    const urlFriendlyTitle = convertToUrlFriendly(title);

    return (
        <Link to={`/${urlFriendlyTitle}`} className="service-card-link">
            <div className="service-card">
                <img src={img} alt={title} />
                <h5>{title}</h5>
            </div>
        </Link>
    );
}

export default ServiceCard;