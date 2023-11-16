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

  return (
    <>
      <>
      <div className="product-auth">
        <h1>Product Auth</h1>
        <h6>Click on image to redirect</h6>
        <Link to={"/auth"}>
          <img src={"src/assets/product-auth.png"} className="card-img-top" alt="calidad" style={{ height: "250px", width: "250px"}} />
        </Link>
      </div>
      </>
      <div className="products-page">
        <h1>Products</h1>
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <>
        <div style={{ marginTop: "2rem" }}>
          <Link to={"/product"} className="button-style">
            Explore more products
          </Link>
        </div>
        <Card></Card>
      </>
    </>
  );
};
