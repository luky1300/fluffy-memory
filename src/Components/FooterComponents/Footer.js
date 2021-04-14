import React from "react";
import "../../style/Footer.css";
import ContactDetailsBlock from "./ContactDetailsBlock";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer>
      <ContactDetailsBlock />
      <ContactForm /> 
      What We Offer Block
    </footer>
  );
}

export default Footer;
