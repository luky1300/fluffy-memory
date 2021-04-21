import styled from "styled-components";

export const FooterContacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 30%;
  margin: 40px 0;
`;
export const FooterLogo = styled.img`
  width: 200px;
`;

export const FooterAbout = styled.p`
  color: #9b9b9b;
  font-size: 14px;
  margin-top: 20px;
  text-align: left;
`;

export const Addresses = styled.div`
  flex-direction: column;
`;

export const AddressItem = styled.div`
  border-bottom: 1px solid #44424e;
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
`;

export const AddressItemName = styled.h2`
  color: #9f97f9;
  font-size: 15px;
  line-height: 1em;
  margin: 10px 10px 10px 0;
  padding: 0;
  text-transform: uppercase;
  width: 20%;
`;

export const AddressItemValue = styled.p`
  color: white;
  font-size: 14px;
  margin: auto 0;
  padding: 0;
  text-align: left;

    &:hover
    color: #9f97f9;
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  margin: 20px 0 0 0;
`;

export const SocialMediaLink = styled.img`
  height: 50px;
  margin-right: 10px;
  width: 50px;
`;
