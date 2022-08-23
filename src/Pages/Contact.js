import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaFacebookMessenger,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <ContactWrapper>
      <SocialMedia>
        <SocialLink href="https://github.com/MustafaOzgur59" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookF />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaFacebookMessenger />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <FaInstagram />
        </SocialLink>
      </SocialMedia>
      <ContactInfo>
        <p>FakeStore</p>
        <p>1523 Tavern Place,Lakewood Colorado USA</p>
        <p>303-988-8434</p>
      </ContactInfo>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  margin-top: 7rem;
  margin-bottom: 26.5rem;
  animation: fadeIn ease 3s;
  background-color: green;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10rem;
  font-size: 10rem;
  min-width: 0;
  @media (max-width: 768px) {
    gap: 5rem;
    font-size: 8rem;
  }
  @media (max-width: 480px) {
    font-size: 5rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const SocialLink = styled.a`
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: yellow;
  flex: 1;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Contact;
