import React from "react";
import Education from "./pages/Education.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ArticleInput from "./pages/ArticleInput.js";
import MicroSavings from "./pages/MicroSavings.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-input" element={<ArticleInput />} />
        <Route path="/microsavings" element={<MicroSavings />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
