import React from "react";
import "../../style/Footer.css";
import ContactDetailsBlock from "./ContactDetailsBlock";
import ContactForm from "./ContactForm";
import WhatWeOffer from "./WhatWeOffer";

function Footer() {
  return (
    <footer>
      <ContactDetailsBlock />
      <ContactForm /> 
      <WhatWeOffer />
    </footer>
  );
}

export default Footer;
