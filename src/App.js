import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CheckOutCart from "./Components/CheckOutCart";
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Header setIsOpen={setIsCartOpen} />}>
            <Route path="contact" element={<Contact />}></Route>
          </Route>

          <Route path="/deneme" element={<Footer />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <CheckOutCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </>
  );
}

export default App;
