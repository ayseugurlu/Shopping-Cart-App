import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';



const UpdateProduct = () => {

  const {state:{product}}=useLocation

  const [newData,setNewData]=useState(product)
  

  return (
    <div className='container'>
    
      <form>
  <div className="mb-3">
    <label htmlFor="product-name" className="form-label">
      Product Name
    </label>
    <input
      type="text"
      className="form-control"
      id="product-name"
      value={newData.name}
      onChange={(e)=>setNewData({...newData,name:e.target.value})}
    />

<div className="mb-3">
    <label htmlFor="product-price" className="form-label">
      Product Price
    </label>
    <input
      type="number"
      className="form-control"
      id="product-price"
     value={newData.price}
     onChange={(e)=>setNewData({...newData,price:e.target.value})}
      
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
     value={newData.amount}
     onChange={(e)=>setNewData({...newData, amount:e.target.value})}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="product-image" className="form-label">
      Product Image
    </label>
    <div className="input-group mb-3">
      <span className="input-group-text"  id="image-example">https://example.com/</span>
      <input type="url" className="form-control" id="product-image" aria-describedby="image-example" 
        value={newData.image}
        onChange={(e)=>setNewData({...newData,image:e.target.value})}
      />
    </div>
  </div>
  
  <div className="text-center">
  <button type="submit" className="btn btn-success my-3 ">
  <FaCartPlus/> Save To Update Product
  </button>
  </div>
</form>
    </div>
  );
}

export default UpdateProduct