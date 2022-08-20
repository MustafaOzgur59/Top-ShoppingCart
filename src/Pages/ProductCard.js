import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProductCard = ({
  id,
  desc,
  image,
  price,
  title,
  cartItems,
  setCartItems,
}) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    console.log("You have triggered meeeeEEEE!!!");
  }, [amount]);

  const onClickPlus = () => {
    setAmount(parseInt(amount, 10) >= 0 ? amount + 1 : 0);
  };

  const onClickMinus = () => {
    setAmount(parseInt(amount, 10) > 0 ? amount - 1 : 0);
  };

  const onAddClick = () => {
    if (amount !== 0) {
      setCartItems([
        ...cartItems,
        { amount: amount, price: price, title: title, image: image, id: id },
      ]);
      setAmount(0);
    } else {
      alert("At least one has to be added!!");
    }
  };

  return (
    <ProductCardWrapper>
      <Info>{title}</Info>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <PriceContainer>
        {price} $
        <InputCont>
          <PlusMinusBtn onClick={() => onClickPlus()}>+</PlusMinusBtn>
          <StyledInput
            type="number"
            name=""
            id="product-amount"
            value={amount ? amount : ""}
            onChange={(e) => {
              setAmount(
                parseInt(e.target.value, 10) >= 0
                  ? parseInt(e.target.value, 10)
                  : 0
              );
            }}
          />
          <PlusMinusBtn onClick={() => onClickMinus()}>-</PlusMinusBtn>
        </InputCont>
      </PriceContainer>
      <Button onClick={onAddClick}>Add To Cart</Button>
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

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlusMinusBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  text-align: center;
  max-width: 10rem;
  &:focus {
    border: 1px solid black;
  }
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
