import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="contact" element={<Contact />}></Route>
        </Route>

        <Route path="/deneme" element={<Footer />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
