import React from "react";
import "../../style/Footer.css";

function ContactForm() {
  return (
    <form className="contact-form">
        <h1>Questions? Contact Us</h1>
        <input className="input-field-1" type="text" id="name" name="name" placeholder="Name" />
        <input className="input-field-1" type="text" id="email" name="email" placeholder="Email" />
        <input className="input-field-2" type="text" id="message" name="message" placeholder="Message" />
        <button className="send-message-button">Send message</button>
      </form>
  );
}

export default ContactForm;