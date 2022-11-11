import React from 'react'
import "../styles/components/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='Navbar'>
        <div className='Navbar-content'>
          <div className='Navbar-logo' onClick={() => navigate("/")}>
          </div>
          <div className='navbar-links'>
            <NavLink className='Link1' to="/microsavings">Link1</NavLink>
            <NavLink className='Link2' to="/payment-tracker">Link2 </NavLink>
            <NavLink className='Link3' to="/education">Link3</NavLink>
          </div>
      </div>
    </div>

  )
}

export default Navbar