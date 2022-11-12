import React from "react";
import "../styles/components/EducationTop.css";
import eduTop from "../assets/EducationImage.jpg";

function EducationTop() {
  return (
    <div className="edu-head">
      <div className="edu-para">
        <h1>Free and open stock market and financial education</h1>
        <p>
          An extensive and in-depth collection of stock market and financial
          lessons. It is openly accessible to everyone.
        </p>
      </div>
      <div className="edu-img">
        <img src={eduTop} alt="eduphoto" />
      </div>
    </div>
  );
}

export default EducationTop;
