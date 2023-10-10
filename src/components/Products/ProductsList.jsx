import React, { useState, useEffect } from "react";
import "./productList.css";
import productsData from "../../data/products.json"; // Importa los datos de los productos
import { ProductItem } from "./ProductItem";
import { Link } from "react-router-dom";
import autenticidad from "../../assets/autenticidad.png";
import calidad from "../../assets/calidad.png";
import tecnologia from "../../assets/tecnologia.png";



export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Carga los productos desde products.json cuando el componente se monta
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="products-page">
        <div className="product-list d-flex flex-wrap justify-content-around">
          {products.slice(0, 4).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <Link to={"/product"} className="button-style">Ver mas productos</Link>
      </div>
      <div className="row">
      <div className="card" style={{ width: '18rem' }}>
        <img src={calidad} className="card-img-top" alt="calidad"/>
        <div className="card-body">
          <p className="card-text">Es nuestra misión entregar a nuestros clientes la mejor calidad de productos farmacéuticos</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={tecnologia} className="card-img-top" alt="tecnologia"/>
        <div className="card-body">
          <p className="card-text">Nuestra producción está equipada con la tecnología más avanzada del mercado farmacéutico</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={autenticidad} className="card-img-top" alt="autenticidad"/>
        <div className="card-body">
          <p className="card-text">Garantizamos la oferta de los sistemas de autenticación tecnológica más recientes en cada producto para proteger a nuestros consumidores</p>
        </div>
      </div>

      </div>
    </>

  );
};
