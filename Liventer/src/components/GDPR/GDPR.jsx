import React, { useState } from 'react';
import './GDPR.css';

function GDPR() {
    const [showPopup, setShowPopup] = useState(true);

    // Evästeen tarkistus selaimesta

    const handleAccept = () => {
        // Aseta eväste
        document.cookie = "gdpr=accept; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        
        // Piilota GDPR-popup
        setShowPopup(false);

        document.body.style.overflow = 'auto';
    };

    if (!showPopup) return null;

    return (
        <div className="gdpr-container" style={{ display: 'block' }} id="gdpr-container">
            <div className="gdpr-popup">
                <h2>Evästekäytäntömme</h2>
                <p>Käytämme evästeitä parantaaksemme käyttäjäkokemusta ja analysoimme verkkosivustomme liikennettä.
                    Lisätietoja evästeiden käytöstä ja tietosuojakäytännöistämme löydät <a href="/tietosuojaseloste">tietosuojaselosteestamme</a>.</p>
                <button id="gdpr-accept" onClick={handleAccept}>Hyväksyn</button>
            </div>
        </div>
    );
}

export default GDPR;




    
