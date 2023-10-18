import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductsDetail.css"

export const ProductsDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="product-detail-container">
      <div className="product-header">
        <h1>{location.state.name}</h1>
        <span className="product-description">{location.state.description}</span>
      </div>

      <div className="product-content">
        <div className="product-info">
          <p>Formula: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor maxime,
             ipsam at, animi minus autem commodi iusto nihil expedita, ex debitis reprehenderit. 
             Mollitia beatae maxime ad cupiditate odit consequuntur!</p>
             <p>Indications: Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor maxime,
             ipsam at, animi minus autem commodi iusto nihil expedita, ex debitis reprehenderit. 
             Mollitia beatae maxime ad cupiditate odit consequuntur!</p>
             <p>Information:Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor maxime,
             ipsam at, animi minus autem commodi iusto nihil expedita, ex debitis reprehenderit. 
             Mollitia beatae maxime ad cupiditate odit consequuntur!</p>
          {/* ... */}
        </div>

        <div className="product-image-price">
          <img src={location.state.image} alt="Imagen del producto" className="product-image"/>
          <div className="product-price-actions">
            <span>Consultar precio</span>
            <div className="product-quantity">
              {/* Aquí puedes agregar un input para la cantidad */}
              <input type="number" defaultValue="1"/>
            </div>
            <button className="view-more-btn">View more</button>
          </div>
        </div>
      </div>

      <Link to={"/"}>
      <button type="button" className="btn btn-dark mb-3">Back</button>
      </Link>
    </div>
  );
};
