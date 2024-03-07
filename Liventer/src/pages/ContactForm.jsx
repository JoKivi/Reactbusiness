import React, { useState } from 'react';
import '../Styles/ContactForm.css'; 

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const url = 'https://liventer.fi/home/gvyzlrgc/public_html/check_contact.php';
    
        const formDataToSend = new FormData();
        formDataToSend.append('user_name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('message', formData.message);
    
        fetch(url, {
            method: 'POST',
            body: formDataToSend,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); 
        })
        .then(data => {
            console.log('Success:', data);
            // Käsittele onnistunut palvelimen vastaus täällä
            // Esimerkiksi näytä onnistumisviesti käyttäjälle tai ohjaa toiselle sivulle
        })
        .catch((error) => {
            console.error('Error:', error);
            // Käsittele virhetilanteita täällä
        });
    
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    

    return (
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nimi</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Sähköposti</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Viesti</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Lähetä</button>
            </form>
        </div>
    );
}

export default ContactForm;
