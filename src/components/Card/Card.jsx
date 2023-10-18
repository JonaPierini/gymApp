import React from "react";
import "./Card.css";
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
            It's our mission to deliver the best quality pharmaceutical products to our customers
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={tecnologia} className="card-img-top" alt="tecnologia" />
        <div className="card-body">
          <p className="card-text">
          Our production is equipped with the most advanced technology in the pharmaceutical market
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
        <img src={autenticidad} className="card-img-top" alt="autenticidad" />
        <div className="card-body">
          <p className="card-text">
          We guarantee the offer of the latest technological authentication systems in each product to protect our consumers
          </p>
        </div>
      </div>
    </div>
  );
};
