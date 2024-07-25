import React from "react";
import { FaCartPlus } from "react-icons/fa6";
const NewProduct = () => {
  return <div className="container p-5 text-light new-product-container mt-5 rounded-4">

<form>
  <div className="mb-3">
    <label htmlFor="product-name" className="form-label">
      Product Name
    </label>
    <input
      type="text"
      className="form-control"
      id="product-name"
      required
    />

<div className="mb-3">
    <label htmlFor="product-price" className="form-label">
      Product Price
    </label>
    <input
      type="number"
      className="form-control"
      id="product-price"
      required
      
    />
  </div>
   
  </div>
  <div className="mb-3">
    <label htmlFor="product-quantity" className="form-label">
      Product Quantity
    </label>
    <input
      type="number"
      className="form-control"
      id="product-quantity"
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="product-image" className="form-label">
      Product Image
    </label>
    <div className="input-group mb-3">
      <span className="input-group-text"  id="image-example">https://example.com/</span>
      <input type="url" className="form-control" id="product-image" aria-describedby="image-example" required/>
    </div>
  </div>
  
  <div className="text-center">
  <button type="submit" className="btn btn-success my-3 ">
  <FaCartPlus /> Save To New Product
  </button>
  </div>
</form>


  </div>;
};

export default NewProduct;
