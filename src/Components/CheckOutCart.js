import React, { useState } from "react";
import styled, { css } from "styled-components";

const CheckOutCart = ({ isOpen, setIsOpen, cartItems, setCartItems }) => {
  return (
    <>
      <CartWrapper isOpen={isOpen}>
        {cartItems.map((cartItem) => {
          return (
            <div>
              <ImageContainer>
                <Image src={cartItem.image} alt="itemImage" />
              </ImageContainer>

              <p>{cartItem.title}</p>
              <p>
                {cartItem.price} $ × {cartItem.amount} ={" "}
                {cartItem.price * cartItem.amount} $
              </p>
              <p></p>
            </div>
          );
        })}
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

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 15rem;
  width: 15rem;
  padding: 3rem;
  margin: 0 auto;
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
