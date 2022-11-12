import React from "react";
import "../styles/components/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <p className="creaters">
          Made with <span className="footer-heart">❤</span> by Pandavs
        </p>
        <p className="footer-contact" style={{cursor: "pointer"}} onClick={() => window.open("mailto:rijulsarji@gmail.com")}>Need Help? Contact us!</p>
        <div className="footer-icons">
          <div className="icon-center">
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
