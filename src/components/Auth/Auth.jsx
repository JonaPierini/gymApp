import axios from "axios";
import React, { useState } from "react";

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
          title: 'Producto autentico',
          text: 'Usted posee un producto autentico de la marca Genoma Pharma',
          icon: 'success',
          confirmButtonColor: "#93BE4F"
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error en la autenticación',
          text: 'Puede que usted tenga un producto ilegitimo, comuniquese con nosotros.',
          confirmButtonColor: "#DD6B55"
        })
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Enter the product code found on the lid</label>
        <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={inputChange}
            onChange={handleChange}
          />
      </div>
      <button type="submit" class="btn btn-primary">Authenticate product</button>
    </form>
  );
};
