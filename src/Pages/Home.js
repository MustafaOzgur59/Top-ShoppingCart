import React from "react";
import styled from "styled-components";
import backgroundImg from "./home.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeWrapper>
      <StyledContainer>
        <h1>The e-commerce platform that cares</h1>
        <h3>Get yourself everything without leaving your home</h3>
        <StyledLink to="products">
          <StyledButton> Shop Now </StyledButton>
        </StyledLink>
      </StyledContainer>
      <img src={backgroundImg} alt="" />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    index: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 2.5rem;
  gap: 2rem;
  max-width: 50rem;
  z-index: 2;
  color: white;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: white;
  background-color: transparent;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 1rem 4rem;
  font-size: 3rem;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

export default Home;
