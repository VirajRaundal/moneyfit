import React from 'react';
import coin from "../assets/coin.jpg";
import "../App.css";

const Loader = () => {
  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
      <img className="loader" src={coin} alt="loader"/>
    </div>
  )
}

export default Loader;