import React from 'react'
import "../styles/components/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='Navbar'>
        <div className='Navbar-content'>
          <div className='Navbar-logo' onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
          </div>
          <div className='navbar-links'>
            <NavLink className='Link1' to="/microsavings">Savings</NavLink>
            <NavLink className='Link2' to="/payment-tracker">Tracker</NavLink>
            <NavLink className='Link3' to="/education">Education</NavLink>
          </div>
      </div>
    </div>

  )
}

export default Navbar