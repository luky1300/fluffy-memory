import React from "react";
import "../../style/Footer.css";
import ContactItem from "./ContactItem";

function ContactDetailsBlock() {
  return (
    <section class="footer-contacts">
      <img
        src="https://ld-wt73.template-help.com/wt_prod-18959/images/logo-inverse-191x52.png"
        alt="DreamSoft Logo"
      />
      <p class="about-company">
        Our company has been developing high-quality and reliable software for
        corporate needs since 2008. We are renowned professionals of software
        development.
      </p>

      <div class="address-block-container">
        <ContactItem
          name="Address"
          value="4730 Crystal Springs Dr, Los Angeles, CA 90027"
        />
        <ContactItem name="PHONE" value="+1 323-913-4688, +1 323-888-4554" />
        <ContactItem
          name="E-MAILS"
          value="info@demolink.org, mail@demolink.org"
        />
      </div>
      <div class="social-media-links-container">
        <img src="img/iconfinder_Circled_Facebook.svg" alt="Facebook Icon" />
        <img src="img/iconfinder_Circled_Instagram.svg" alt="Instagram Icon" />
        <img src="img/iconfinder_Circled_Linkedin.svg" alt="Linkedin Icon" />
        <img src="img/iconfinder_Circled_Twitter.svg" alt="Twitter Icon" />
      </div>
    </section>
  );
}

export default ContactDetailsBlock;
