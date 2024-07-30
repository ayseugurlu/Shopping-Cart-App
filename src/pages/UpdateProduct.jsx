import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const {
    state: { product },
  } = useLocation();

  const [newData, setNewData] = useState(product);

  const navigate = useNavigate();

  const BASE_URL = "https://66a76a3c53c13f22a3cfa21e.mockapi.io/products";
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`${BASE_URL}/${newData.id}`, newData);

    navigate(-1);
  };

  return (
    <div className="container text-light">
    <h1 className="text-center my-3">Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="product-name"
            value={newData.name}
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
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
              onChange={(e) =>
                setNewData({ ...newData, price: e.target.value })
              }
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
            onChange={(e) => setNewData({ ...newData, amount: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product-image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="image-example">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              id="product-image"
              aria-describedby="image-example"
              value={newData.image}
              onChange={(e) =>
                setNewData({ ...newData, image: e.target.value })
              }
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success my-3 ">
            <FaCartPlus /> Save To Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
