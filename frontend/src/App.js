import React from "react";
import Education from "./pages/Education.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ArticleInput from "./pages/ArticleInput.js";
import MicroSavings from "./pages/MicroSavings.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PaymentTracker from "./pages/PaymentTracker.js";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-input" element={<ArticleInput />} />
        <Route path="/microsavings" element={<MicroSavings />} />
        <Route path="/education" element={<Education />} />
        <Route path="/payment-tracker" element={<PaymentTracker />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
