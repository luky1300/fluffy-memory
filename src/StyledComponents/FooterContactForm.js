import styled from "styled-components";

export const ContactForm = styled.form`
  margin: 40px;
  width: 400px;
`;

export const ContactFormTitle = styled.h1`
  color: #696770;
`;

export const ContactFormInputContacts = styled.input`
  background-color: #2c2b39;
  border: none;
  color: white;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  margin: 5px;
  padding-left: 20px;
  width: 400px;

  &:focus
  border: 0;
  outline: 0;
`;

export const ContactFormInputMessage = styled(ContactFormInputContacts)`
  height: 150px;
`;

export const ContactFormButton = styled.button`
  background-color: #756aee;
  border: none;
  color: white;
  font-weight: bold;
  height: 50px;
  margin: 10px 0 0 5px;
  text-transform: uppercase;
  width: 400px;
`;
