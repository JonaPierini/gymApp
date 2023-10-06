import React, { useState, useEffect } from "react";
import productsData from "../../data/products.json"; // Importa los datos de los productos
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Carga los productos desde products.json cuando el componente se monta
    setProducts(productsData);
  }, []);

  return (
    <div className="products-page">
      <h1>Lista de Productos</h1>
      <div className="product-list d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
