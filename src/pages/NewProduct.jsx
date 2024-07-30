import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const NewProduct = () => {

  const initialValue={
    name: "",
    price: 0,
    amount: 0,
    image: "",
    dampingRate: 0.8,
  }

  const BASE_URL="https://66a76a3c53c13f22a3cfa21e.mockapi.io/products"

  const [formData,setFormData]=useState(initialValue)
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.post(BASE_URL, formData)

    setFormData(initialValue)
    navigate("/product-list") 


  }


  return <div className="container p-5 text-light new-product-container mt-5 rounded-4">

<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="product-name" className="form-label">
      Product Name
    </label>
    <input
      type="text"
      className="form-control"
      id="product-name"
      required
      onChange={(e)=>setFormData({...formData,name:e.target.value})}
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
      onChange={(e)=>setFormData({...formData,price:e.target.value})}
      
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
      onChange={(e)=>setFormData({...formData,amount:e.target.value})}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="product-image" className="form-label">
      Product Image
    </label>
    <div className="input-group mb-3">
      <span className="input-group-text"  id="image-example">https://example.com/</span>
      <input type="url" className="form-control" id="product-image" aria-describedby="image-example" required
        onChange={(e)=>setFormData({...formData,image:e.target.value})}
      />
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
