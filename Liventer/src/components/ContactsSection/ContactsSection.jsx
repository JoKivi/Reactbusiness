import React from 'react';
import './Contacts.css';

const ContactsSection = () => {
    return (
        <div className="contacts-container" name='contacts'>
            <div className="contact">
                <img src="/img/Djsmiley.webp" alt="Contact 1" className="contact-image" />
                <div className="contact-info">
                    <h2>Contact 1</h2>
                    <p><strong>Title 1</strong></p>
                    <p>contact1@example.com</p>
                    <p>+1 123-456-7890</p>
                </div>
            </div>
            <div className="contact">
                <img src="/img/Djsmiley.webp" alt="Contact 2" className="contact-image" />
                <div className="contact-info">
                    <h2>Contact 2</h2>
                    <p><strong>Title 2</strong></p>
                    <p>contact2@example.com</p>
                    <p>+1 987-654-3210</p>
                </div>
            </div>
        </div>
    );
}

export default ContactsSection;
