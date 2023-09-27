import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Company from "./Pages/Company";
import Product from "./Pages/Product";
import Technology from "./Pages/Technology";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Product />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/Contact Us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
