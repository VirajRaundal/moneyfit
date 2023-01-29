import React, { createContext, useEffect, useState } from "react";
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
// import { APIcontextProvider } from "./context/context";

export const ApiData = createContext();

const App = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(true);
  const [articleData, setArticleData] = useState();
  const [articleLoad, setArticleLoad] = useState(true);

  function fetchApi() {
    fetch("https://gullak-backend.onrender.com/payment-complete-history")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
        // console.log(data)
    });
  }

  function fetchArticleApi() {
    fetch("https://gullak-backend.onrender.com/article-publish")
      .then((response) => response.json())
      .then((data) => {
        setArticleData(data);
        setArticleLoad(false);
      });
  }

  useEffect(() => {
    fetchApi();
    fetchArticleApi();
  }, [])

  return (
    <>

      {window.location.pathname === "/" ? <LandingPage /> : (
        <ApiData.Provider value={{contextData: data, contextLoad: load, setLoad: setLoad, fetchApi: fetchApi, articleData: articleData, articleLoad: articleLoad}}>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/article-input" element={<ArticleInput />} />
            <Route path="/microsavings" element={<MicroSavings />} />
            <Route path="/payment-tracker" element={<PaymentTracker />} />
            <Route path="/education" element={<Education />} />
          </Routes>
          <Footer />
        </ApiData.Provider>
      )}
    </>
  );
};

export default App;