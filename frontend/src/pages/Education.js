import React from "react";
import EducationBottom from "../components/EducationBottom";
import EducationTop from "../components/EducationTop";
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
