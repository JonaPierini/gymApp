import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductsDetail = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>{location.state.name}</h1>
      <span>{location.state.description}</span>
      <img src={location.state.image}></img>
      <Link to={"/"}>Regresar</Link>
    </>
  );
};
