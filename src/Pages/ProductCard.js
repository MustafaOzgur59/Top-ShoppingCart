import React from "react";
import styled from "styled-components";

const ProductCard = ({ desc, image, price, title }) => {
  return (
    <ProductCardWrapper>
      <Info>{title}</Info>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <p>{price} $</p>
      <Button>Add To Cart</Button>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
  padding: 2rem;
`;

const Image = styled.img`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 20rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: bold;
  padding: 2rem 4rem;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: black;
  color: white;
`;

export default ProductCard;
