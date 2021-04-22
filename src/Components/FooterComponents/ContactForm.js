import React from "react";
import {
  ContactForm,
  ContactFormInputContacts,
  ContactFormInputMessage,
  ContactFormButton,
} from "../../StyledComponents/FooterContactForm";
import { FooterTitle } from "../../StyledComponents/Footer";

function ContactFormStyled() {
  return (
    <ContactForm>
      <FooterTitle>Questions? Contact Us</FooterTitle>
      <ContactFormInputContacts
        type="text"
        id="name"
        name="name"
        placeholder="Name"
      />
      <ContactFormInputContacts
        type="text"
        id="email"
        name="email"
        placeholder="Email"
      />
      <ContactFormInputMessage
        type="text"
        id="message"
        name="message"
        placeholder="Message"
      />
      <ContactFormButton className="send-message-button">
        Send message
      </ContactFormButton>
    </ContactForm>
  );
}

export default ContactFormStyled;
