import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductsDetail.css";

export const ProductsDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1>{location.state.name}</h1>
      </div>

      <div className="product-content">
        <div className="product-info">
          <p>{location.state.description}</p>
        </div>

        <div className="product-image-price">
          <img
            src={location.state.image}
            alt="Imagen del producto"
            className="product-image"
          />
        </div>
      </div>

      <Link to={"/"}>
        <button type="button" className="btn btn-dark mb-3">
          Back
        </button>
      </Link>
    </div>
  );
};
