import React from "react";
import "../styles/components/EducationTop.css";
import eduTop from "../assets/education-top-pic.jpg";

function EducationTop() {
  return (
    <div className="edu-head">
      <div className="edu-para">
        <h1>Free and open stock market and financial education</h1>
        <p>
          Varsity is an extensive and in-depth collection of stock market and
          financial lessons created by Karthik Rangappa at Zerodha. It is openly
          accessible to everyone and is one of the largest financial education
          resources on the web.
        </p>
      </div>
      <div className="edu-img">
        <img src={eduTop} alt="eduphoto" />
      </div>
    </div>
  );
}

export default EducationTop;
