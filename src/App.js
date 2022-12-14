import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CheckOutCart from "./Components/CheckOutCart";
import styled from "styled-components";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <AppWrapper>
      <HashRouter className="App">
        <Routes>
          <Route
            path="/"
            element={<Header setIsOpen={setIsCartOpen} cartItems={cartItems} />}
          >
            <Route path="/" element={<Home />} />
            <Route
              path="products"
              element={
                <Products cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
        <Footer />
        <CheckOutCart
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </HashRouter>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
