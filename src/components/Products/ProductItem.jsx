import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail", {
      state: product,
    });
  };

  return (
    <div
      className="card product-card"
      style={{ width: "18rem", margin: "10px" }}
    >
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button onClick={handleNavigate}>Ver más</button>
      </div>
    </div>
  );
};
