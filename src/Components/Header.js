import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const HeaderWrapper = styled.div`
  background-color: black;
  max-width: 100vw;
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Logo = styled.div`
  color: #fe6100;
  font-size: 5rem;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:5rem;
  font-size: 3.5rem;
  padding: 0 2rem;
  

  @media (max-width: 480px) {
    gap:0,
    width:100%;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.4);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  color: #fe6100;
  background-color: inherit;
  padding: 1rem;
  &:hover {
    transform: scale(1.4);
  }
  &:active {
    transform: scale(1.05);
  }
`;

const ProductCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  position: absolute;
  bottom: 0;
  left: 60%;
  color: white;
  background-color: #fe6100;
  border-radius: 50%;
`;

const Header = ({ setIsOpen, cartItems }) => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Link to="/">
            <Logo>WAssappp</Logo>
          </Link>
          <Navbar>
            <StyledLink to="/"> Home</StyledLink>
            <StyledLink to="products">Products</StyledLink>
            <StyledLink to="contact">Contanct</StyledLink>
            <ButtonContainer onClick={() => setIsOpen(true)}>
              <FaShoppingCart />
              <ProductCount>
                {cartItems.reduce((acc, item) => {
                  return acc + item.amount;
                }, 0)}
              </ProductCount>
            </ButtonContainer>
          </Navbar>
        </Container>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
