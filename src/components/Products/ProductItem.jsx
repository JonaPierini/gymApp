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
        <div style={{
          display : "flex",
          flexDirection : "column",
          alignItems : "center"
          }}>
          <h5 className="card-title">{product.name}</h5>
          <button className="expand-btn" onClick={handleNavigate}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
