import React from "react";
import {
  AddressItem,
  AddressItemName,
  AddressItemValue,
} from "../../StyledComponents/FooterContacts";

function ContactItemStyled(props) {
  return (
    <AddressItem>
      <AddressItemName>{props.name}</AddressItemName>
      <AddressItemValue>{props.value}</AddressItemValue>
    </AddressItem>
  );
}

export default ContactItemStyled;
