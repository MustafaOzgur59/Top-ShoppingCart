import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

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

  const wrappedProducts = (
    <ProductsWrapper>
      {products.map((product) => {
        return (
          <ProductCard
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
  );

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
    <>
      {loading ? (
        "Loading products ..."
      ) : (
        <ProductsWrapper>
          {products.map((product) => {
            return (
              <ProductCard
                desc={product.description}
                image={product.image}
                price={product.price}
                title={product.title}
              />
            );
          })}
        </ProductsWrapper>
      )}
    </>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 4rem;
  padding: 5rem;

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

export default Products;
