import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ViewMoreProducts.css";
import { ProductItem } from "../Products/ProductItem";
import axios from "axios";

export const ViewMoreProducts = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await axios.get("/getProducts", {
          params: {
            isGenoma: true,
          },
        });

        setProducts(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
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
