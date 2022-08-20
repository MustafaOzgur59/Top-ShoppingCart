import React, { useState } from "react";
import styled, { css } from "styled-components";

const CheckOutCart = ({ isOpen, setIsOpen, cartItems, setCartItems }) => {
  const handleDiscard = (id) => {
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingItems);
  };
  return (
    <>
      <CartWrapper isOpen={isOpen}>
        {cartItems.map((cartItem) => {
          return (
            <ProductCard>
              <ImageContainer>
                <Image src={cartItem.image} alt="itemImage" />
              </ImageContainer>
              <h5>{cartItem.title}</h5>
              <p>
                {cartItem.price} $ × {cartItem.amount} ={" "}
                {cartItem.price * cartItem.amount} $
              </p>
              <DiscardButton
                onClick={() => {
                  handleDiscard(cartItem.id);
                }}
              >
                Discard
              </DiscardButton>
            </ProductCard>
          );
        })}
        <Button style={{ backgroundColor: "green" }}>CheckOut</Button>
        <Button
          style={{ backgroundColor: "red" }}
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </CartWrapper>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -110%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 35vw;
  height: 100%;
  padding: 6rem;
  background-color: #fff;
  font-size: 3rem;
  overflow-y: auto;
  transition: right 0.85s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
    `}
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProductCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.9);
`;

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 15rem;
  width: 15rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 8px;
  background-color: black;
  color: white;
  width: 90%;
`;

const DiscardButton = styled(Button)`
  padding: 0.5rem 1rem;
  width: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  transition: left 0.85s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      left: 0;
    `}
`;
export default CheckOutCart;
