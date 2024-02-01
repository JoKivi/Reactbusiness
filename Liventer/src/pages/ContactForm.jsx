import React, { useState } from 'react';
import '../Styles/ContactForm.css'; 

const ContactForm = () => {

  return (
    <div className="contact-form-container">
      <div className="form-wrapper">
        <h1 className="contact-header">Ota yhteyttä</h1>
        <form onSubmit={handleSubmit} className="contact-form">
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
