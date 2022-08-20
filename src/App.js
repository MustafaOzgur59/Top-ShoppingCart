import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CheckOutCart from "./Components/CheckOutCart";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Header setIsOpen={setIsCartOpen} />}>
            <Route path="home" element={<Home />} />
            <Route
              path="products"
              element={
                <Products cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <CheckOutCart
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;
