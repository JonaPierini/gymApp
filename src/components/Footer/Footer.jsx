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
            <li>Productos</li>
            <li>Contactos</li>
            <li>La empresa</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>CONTACTO</h2>
        <p>Contactese por WhatsApp</p>
        <a href="https://web.whatsapp.com/send?phone=3412136742" target="blank">
          <img
            src="https://www.pngfind.com/pngs/m/49-494185_logo-whatsapp-png-whatsapp-logo-png-transparent-png.png"
            alt="WhatsApp"
            className="img_wsp"
          />
        </a>
      </div>
    </div>
  );
};
