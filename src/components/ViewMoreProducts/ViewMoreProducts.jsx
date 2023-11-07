import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsData from "../../data/products.json"; // Importa los datos de los productos
import "./ViewMoreProducts.css";
import { ProductItem } from "../Products/ProductItem";

export const ViewMoreProducts = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="products-page">
        <h3 className="text-center">Orals Product</h3>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products
            .filter((product) => product.type === "orals")
            .map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </div>

        <h3 className="text-center">Inyectable Product</h3>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products
            .filter((product) => product.type === "inyectable")
            .map((product) => {
              return <ProductItem key={product.id} product={product} />;
            })}
        </div>
      </div>

      <div className="buttonViewMoreProducts">
        <button
          onClick={handleBack}
          type="button"
          className="btn btn-outline-secondary"
        >
          Back
        </button>
      </div>
    </>
  );
};
