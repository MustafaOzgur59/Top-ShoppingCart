import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: black;
  max-height: 100px;
  height: 50px;

  a,
  a:hover,
  a:visited,
  a:focus,
  a:active {
    color: white;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <a
        href="https://github.com/MustafaOzgur59?tab=repositories"
        target="blank"
      >
        <p>MustafaOzgur59</p>
      </a>

      <a
        href="https://github.com/MustafaOzgur59?tab=repositories"
        target="blank"
      >
        <FaGithub />
      </a>
    </FooterWrapper>
  );
}
