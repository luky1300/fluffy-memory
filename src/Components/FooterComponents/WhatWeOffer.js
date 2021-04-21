import React from "react";
import {
  ServiceItem,
  ServiceItemText,
  ServiceItemTriangle,
  WhatWeOffer,
} from "../../StyledComponents/WhatWeOffer";
import { FooterTitle } from "../../StyledComponents/Footer";

const services = [
  "DB Management",
  "IOS/MacOS",
  "Android Apps",
  "Windows Apps",
  "UX/UI Apps",
];

function WhatWeOfferStyled() {
  return (
    <WhatWeOffer>
      <FooterTitle>What We Offer</FooterTitle>
      {services.map((service, ind) => (
        <ServiceItem key={`weoffer${ind}`}>
          <ServiceItemText>{service}</ServiceItemText>
          <ServiceItemTriangle />
        </ServiceItem>
      ))}
    </WhatWeOffer>
  );
}

export default WhatWeOfferStyled;
