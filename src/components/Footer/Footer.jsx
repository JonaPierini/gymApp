import React from "react";
import "./Footer.css";
import genomapharma from "../../assets/genomapharma.jpg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="brand-section">
        <h1 className="footer-font">
          <span className="color-rojo">GENOMA </span>
          <span className="color-azul">PHARMA</span>
        </h1>
        <img src={genomapharma} alt="Logo" className="img_footer" />
        <div className="brand-description">
          <ul>
            <li>Products</li>
            <li>Contact</li>
            <li>About us</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact</h2>
        <a href="https://web.whatsapp.com/send?phone=3412136742" target="blank">
          <img
            src="http://logo-logos.com/2016/10/WhatsApp_logo_icon.png"
            alt="WhatsApp"
            className="img_wsp"
          />
        </a>
      </div>
    </div>
  );
};
