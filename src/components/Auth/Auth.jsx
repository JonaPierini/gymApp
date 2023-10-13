import React, { useState } from "react";

export const Auth = () => {
  const [inputChange, setInputChange] = useState("");

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputChange);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Auth</h1>
      <input value={inputChange} onChange={handleChange}></input>
      <button>Autenticar</button>
    </form>
  );
};
