import React, { useState, useEffect } from 'react';
import './GDPR.css';

function GDPR() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Tarkista, onko GDPR-eväste asetettu
        const gdprCookie = document.cookie.split(';').some((item) => item.trim().startsWith('gdpr='));
        if (!gdprCookie) {
            setShowPopup(true); // Näytä GDPR-popup, jos ei oo evästettä
        }
    }, []);

    const handleAccept = () => {
        document.cookie = "gdpr=accept; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setShowPopup(false); // Piilota GDPR-popup
    };

    if (!showPopup) return null; // Älä renderröi mitään, jos popup ei oo aktiivinen


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




    
