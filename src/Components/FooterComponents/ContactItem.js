import React from "react";
import "../../style/Footer.css";

function ContactItem(props) {
  return (
    <div className="one-contact-block">
      <h2>{props.name}</h2>
      <p>{props.value}</p>
    </div>
  );
}

export default ContactItem;
