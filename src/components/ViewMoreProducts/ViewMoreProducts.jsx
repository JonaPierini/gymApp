import React from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "../Products/ProductsList";
import "./ViewMoreProducts.css";

export const ViewMoreProducts = () => {
  return (
    <>
      <ProductsList />
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <div className="buttonViewMoreProducts">
          <button type="button" className="btn btn-outline-secondary">
            Back
          </button>
        </div>
      </Link>
    </>
  );
};
