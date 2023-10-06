import React from "react";
import "./Footer.css"
import genomapharma from "../../assets/genomapharma.jpg"

export const Fotter = () => {
  return (
    <div className="footer-container">
        <div className="brand-section">
            <h1 class="footer-font">
            <span class="color-rojo">GENOMA </span> 
            <span class="color-azul">PHARMA</span>
            </h1>
            <img src={genomapharma} alt="Logo"className="img_footer" />
            <div className="brand-description">
                <p>Espacio para insertar desc...</p>
                <ul>
                    <li>Productos</li>
                    <li>Contactos</li>
                    <li>La empresa</li>
                </ul>
            </div>
        </div>


        <div className="contact-section">
            <h2>CONTACTO</h2>
            <p>Contactese por Whatsapp</p>
            <a href="whatsapp://send?phone=NUMERO_TELEFONO">
                <img src="https://img.freepik.com/vector-gratis/diseno-icono-whatsapp_23-2147900927.jpg?w=740&t=st=1696627294~exp=1696627894~hmac=e1efa171b0440564565e5969d09309356e9d1478a212c6a9c2c2d3ccdb5ed658" alt="WhatsApp" className="img_wsp" />
            </a>
        </div>
    </div>
);
};
