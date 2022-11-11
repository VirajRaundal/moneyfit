import React from "react";
import "./App.css";
import ArticleInput from "./pages/ArticleInput";
import Education from "./pages/Education";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import MicroSavings from "./pages/MicroSavings";
import PaymentTracker from "./pages/PaymentTracker";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>

      {window.location.pathname === "/landing-page" ? <LandingPage /> : (
        <>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/article-input" element={<ArticleInput />} />
          <Route path="/microsavings" element={<MicroSavings />} />
          <Route path="/payment-tracker" element={<PaymentTracker />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
        </>
      )}
    </>
  );
};

export default App;