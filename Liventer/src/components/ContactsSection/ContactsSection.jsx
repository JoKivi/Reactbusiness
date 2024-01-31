import React from 'react';
import './Contacts.css';

const ContactsSection = () => {
    return (
        <div className="contacts-container" name='contacts'>
            <div className="contact">
                <img src="/img/Djsmiley.webp" alt="Contact 1" className="contact-image" />
                <div className="contact-info">
                    <h2>OKKO IKONEN</h2>
                    <p><strong>Toimitusjohtaja</strong></p>
                    <p>okko.ikonen@liventer.fi</p>
                    <p>+358 50 3566 924</p>
                </div>
            </div>
            <div className="contact">
                <img src="/img/Samppa.webp" alt="Contact 2" className="contact-image" />
                <div className="contact-info">
                    <h2>SAMPPA SILVAANI</h2>
                    <p><strong>Tuotantopäällikkö</strong></p>
                    <p>samppa@liventer.fi</p>
                    <p>+358 40 5455 417</p>
                </div>
            </div>
            <div className="contact">
                <img src="/img/Djsmiley.webp" alt="Contact 2" className="contact-image" />
                <div className="contact-info">
                    <h2>KIMMO LUOKKANEN</h2>
                    <p><strong>Aluevastaava pohjoinen</strong></p>
                    <p>kimmo.luokkanen@liventer.fi</p>
                    <p>+358050 3823 211</p>
                </div>
            </div>
        </div>
    );
}

export default ContactsSection;
