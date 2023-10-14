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
      <div className="input-group mb-3">
        <button className="input-group-text" id="inputGroup-sizing-default">
          Auth
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={inputChange}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
