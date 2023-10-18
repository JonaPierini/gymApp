import React, { useState, useEffect } from "react";
import "./productList.css";
import productsData from "../../data/products.json"; // Importa los datos de los productos
import { ProductItem } from "./ProductItem";
import { Link, useLocation } from "react-router-dom";
import { Card } from "../Card/Card";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const location = useLocation();

  return (
    <>
      <div className="products-page">
        <div className="product-list d-flex flex-wrap justify-content-around">
          {location.pathname == "/"
            ? products
                .slice(0, 4)
                .map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
            : products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </div>
      {location.pathname == "/" && (
        <>
          <div style={{ marginTop: "2rem" }}>
            <Link to={"/product"} className="button-style">
              Explore more products
            </Link>
          </div>
          <Card></Card>
        </>
      )}
    </>
  );
};
