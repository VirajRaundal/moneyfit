import React from "react";
import "../styles/pages/LandingPage.css";
import pigTop from "../assets/Landing_pig.png";

const LandingPage = () => {
  return (
    <div className="Landing-page">
      {/* <div className="TeamName">
        <p>TEAM PANDAVS</p>
      </div> */}
      <div className="Landing-page-text">
        <h3>MoneyFit</h3>
        <p>BUDGETING IN YOUR POCKET</p>
        <button
          className="Landing-Button"
          onClick={() =>
            window.open("http://localhost:3000/home", "_self")
          }
        >
          Discover More
        </button>
      </div>
      <div className="Landing-page-img">
        <img src={pigTop} alt="pig" />
      </div>
    </div>
  );
};

export default LandingPage;
