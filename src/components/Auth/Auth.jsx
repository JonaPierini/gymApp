import axios from "axios";
import React, { useState } from "react";
import "./Auth.css";

export const Auth = () => {
  const [inputChange, setInputChange] = useState("");

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputChange);

    axios.post('http://localhost:4000/modifyById', { id: inputChange })
    .then((response) => {

      console.log(response.data)

      if(response.data == true){
        Swal.fire({
          title: 'Authentic product',
          text: 'You have an authentic product from the Genoma Pharma brand',
          icon: 'success',
          confirmButtonColor: "#93BE4F"
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: 'You may have an illegitimate product, contact us.',
          confirmButtonColor: "#DD6B55"
        })
      }
    })
  };

  return (
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <label className="form-label">Enter the product code</label>
          <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={inputChange}
              onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn btn-primary">Authenticate product</button>
      </form>
  );
};
