import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Products = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadProducts().then(() => {
      setLoading(false);
      console.log("Products loaded inside useEffect");
    });
  }, []);

  const fetchProducts = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const data = await products.json();
    console.log(data);
    return data;
  };

  const loadProducts = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  return (
    <Wrapper>
      {loading ? (
        <ModalWrapper>
          <LoadingModal></LoadingModal>
          <h1>Loading Products</h1>
        </ModalWrapper>
      ) : (
        <ProductsWrapper>
          {products.map((product) => {
            const uniqKey = uuidv4();
            return (
              <ProductCard
                key={uniqKey}
                id={uniqKey}
                desc={product.description}
                image={product.image}
                price={product.price}
                title={product.title}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            );
          })}
        </ProductsWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 4rem 0rem 10rem 0rem;
  padding: 0rem 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ModalWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    color: white;
  }
  align-items: center;
  justify-content: center;
  background-color: #dcd8d0;
`;

const LoadingModal = styled.div`
  width: 300px;
  height: 300px;
  border: 7px solid #d86881;
  border-left: 7px solid white;
  border-radius: 50%;
  animation: ${spin} 1000ms infinite ease-in-out;
`;

export default Products;
