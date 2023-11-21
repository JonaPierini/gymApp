import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ProductsDetail.css";

export const ProductsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const productDescription = { __html: location.state.description };

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1>{location.state.name}</h1>
      </div>

      <div className="product-content">
        <div className="product-info" dangerouslySetInnerHTML={productDescription} />

        <div className="product-image-price">
          <img
            src={location.state.image}
            alt="Imagen del producto"
            className="product-image"
          />
        </div>
      </div>

      <button onClick={handleBack} type="button" className="btn btn-dark mb-3">
        Back
      </button>
    </div>
  );
};
