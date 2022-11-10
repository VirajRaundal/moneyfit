import React from "react";
import EducationBottom from "../components/EducationBottom.js";
import EducationTop from "../components/EducationTop.js";
import "../styles/pages/Education.css";

function Education() {
  return (
    <div className="edu-page">
      <div className="edu-centre">
        <div>
          <EducationTop />
          <EducationBottom />
        </div>
      </div>
    </div>
  );
}

export default Education;
