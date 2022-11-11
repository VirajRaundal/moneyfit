import React from 'react'
import "../styles/components/HomeTop.css";
const HomeTop = () => {
  return (
    <div className="landing-top">
      <div className="landing-top-text">
        <p>
          Beware of little <b style={{textTransform:'uppercase'}}>expenses</b>, a small leak will sink a great ship.
        </p>
        <p
          style={{
            fontSize: 24,
            fontStyle: "italic",
            textAlign: "right",
            marginTop: 20,
          }}
        >
          ~Benjamin Franklin
        </p>
      </div>
      <div className="landing-top-image">
      </div>
    </div>
  );
}

export default HomeTop