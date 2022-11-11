import React from 'react'
import "../styles/pages/LandingPage.css";
import pigTop from "../assets/Landing_pig.png";
import { redirect, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='Landing-page'>
        <div className='TeamName'>
            <p>TEAM PANDAVS</p>
        </div>
        <div className='Landing-page-text'>
            <h3>GULLAK</h3>
            <p>BUDGETING IN YOUR POCKET</p>
        </div>
        <div className='Landing-page-img'>
            <img src={pigTop}  alt='pig'/>
        </div>
        <div>
            <button className='Landing-Button' onClick={() => window.open("http://localhost:3000", "_self")}>
                Discover More
            </button>
        </div>


    </div>
  )
}

export default LandingPage