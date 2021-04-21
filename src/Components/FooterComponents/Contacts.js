import React from "react";
import {
  Addresses,
  FooterAbout,
  FooterContacts,
  FooterLogo,
  SocialMediaLink,
  SocialMediaLinks,
} from "../../StyledComponents/FooterContacts";
import ContactItemStyled from "./ContactItem";

function ContactsStyled() {
  return (
    <FooterContacts>
      <FooterLogo
        src="https://ld-wt73.template-help.com/wt_prod-18959/images/logo-inverse-191x52.png"
        alt="DreamSoft Logo"
      />
      <FooterAbout>
        Our company has been developing high-quality and reliable software for
        corporate needs since 2008. We are renowned professionals of software
        development.
      </FooterAbout>

      <Addresses>
        <ContactItemStyled
          name="Address"
          value="4730 Crystal Springs Dr, Los Angeles, CA 90027"
        />
        <ContactItemStyled
          name="PHONE"
          value="+1 323-913-4688, +1 323-888-4554"
        />
        <ContactItemStyled
          name="E-MAILS"
          value="info@demolink.org, mail@demolink.org"
        />
      </Addresses>
      <SocialMediaLinks>
        <SocialMediaLink
          src="img/iconfinder_Circled_Facebook.svg"
          alt="Facebook Icon"
        />
        <SocialMediaLink
          src="img/iconfinder_Circled_Instagram.svg"
          alt="Instagram Icon"
        />
        <SocialMediaLink
          src="img/iconfinder_Circled_Linkedin.svg"
          alt="Linkedin Icon"
        />
        <SocialMediaLink
          src="img/iconfinder_Circled_Twitter.svg"
          alt="Twitter Icon"
        />
      </SocialMediaLinks>
    </FooterContacts>
  );
}

export default ContactsStyled;
