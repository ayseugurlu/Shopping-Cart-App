import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate=useNavigate()

 
  return (
    <main className="main">
      <div>
        <h1>Welcome to My Shopping Cart</h1>
        <div className="main-buttons d-flex justify-content-center">
          <button
          onClick={()=>navigate("/new-product")}
           className="btn btn-primary px-4">
            Add New Product
          </button>
          <button className="btn btn-primary px-4 ms-3" onClick={()=>navigate("/product-list")}>See Products</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
