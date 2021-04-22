import React from "react";
import ContactsStyled from "./Contacts";
import ContactFormStyled from "./ContactForm";
import { Footer } from "../../StyledComponents/Footer";
import WhatWeOfferStyled from "./WhatWeOffer";

function FooterStyled() {
  return (
    <Footer>
      <ContactsStyled />
      <ContactFormStyled />
      <WhatWeOfferStyled />
    </Footer>
  );
}

export default FooterStyled;
