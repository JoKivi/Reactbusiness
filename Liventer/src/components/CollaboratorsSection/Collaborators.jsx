import React from 'react';
import './Collaborators.css';

const Collaborators = () => {
    const logos = [
        { id: 1, src: './logos/FunFun.png', alt: 'FunFun logo' },
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
