import React from "react";
import ContactDetailsBlock from "./ContactDetailsBlock";
import ContactFormStyled from "./ContactForm";
import WhatWeOffer from "./WhatWeOffer";
import Footer from "../../StyledComponents/Footer";

function FooterStyled() {
  return (
    <Footer>
      <ContactDetailsBlock />
      <ContactFormStyled />
      <WhatWeOffer />
    </Footer>
  );
}

export default FooterStyled;
