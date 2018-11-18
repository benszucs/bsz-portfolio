import React from 'react';
import ContactForm from './ContactForm';

const Contact = (props) => (
  <div className="page--container">
    <h1 className="page--title">CONTACT</h1>
    <ContactForm env={props.env}/>
  </div>
);

export default Contact;
