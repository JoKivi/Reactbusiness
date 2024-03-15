import React from 'react';
import './Collaborators.css';

const Collaborators = () => {
    const logos = [
        { id: 1, src: './logos/FunFun.png', alt: 'FunFun logo' },
        { id: 2, src: './logos/rajupaja.png', alt: 'Rajupaja logo' },
        { id: 3, src: './logos/tuusula.png', alt: 'Tuusula logo' },
        { id: 4, src: './logos/kerava.png', alt: 'Kerava logo' },

    ];

    return (
        <div className="collaborators-container">
            <div className="title-container">
                <h2>Yhteistyössä</h2>
            </div>
            <div className="logos-container">
                {logos.map((logo) => (
                    <div key={logo.id} className="logo-container">
                        <img src={logo.src} alt={logo.alt} className="logo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collaborators;
