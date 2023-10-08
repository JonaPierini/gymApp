import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div>
      <h1>No Match</h1>
      <Link to={"/"}>Regresar al inicio</Link>
    </div>
  );
};
