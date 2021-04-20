import React from "react";
import {
  ContactForm,
  ContactFormTitle,
  ContactFormInputContacts,
  ContactFormInputMessage,
  ContactFormButton,
} from "../../StyledComponents/FooterContactForm";

function ContactFormStyled() {
  return (
    <ContactForm>
      <ContactFormTitle>Questions? Contact Us</ContactFormTitle>
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
