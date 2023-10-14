import React from "react";
import "./Card";
import autenticidad from "../../assets/autenticidad.png";
import calidad from "../../assets/calidad.png";
import tecnologia from "../../assets/tecnologia.png";

export const Card = () => {
  return (
    <div className="row">
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={calidad} className="card-img-top" alt="calidad" />
        <div className="card-body">
          <p className="card-text">
            Es nuestra misión entregar a nuestros clientes la mejor calidad de
            productos farmacéuticos
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={tecnologia} className="card-img-top" alt="tecnologia" />
        <div className="card-body">
          <p className="card-text">
            Nuestra producción está equipada con la tecnología más avanzada del
            mercado farmacéutico
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={autenticidad} className="card-img-top" alt="autenticidad" />
        <div className="card-body">
          <p className="card-text">
            Garantizamos la oferta de los sistemas de autenticación tecnológica
            más recientes en cada producto para proteger a nuestros consumidores
          </p>
        </div>
      </div>
    </div>
  );
};
