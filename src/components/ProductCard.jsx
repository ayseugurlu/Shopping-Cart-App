import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ product, getData }) => {
  const navigate = useNavigate();

  const { id, name, image, dampingRate, amount, price } = product;

  const BASE_URL = "https://66a76a3c53c13f22a3cfa21e.mockapi.io/products";

  const handleDecrease = async () => {
    if (amount > 1) {
      await axios.put(`${BASE_URL}/${id}`, { ...product, amount: amount - 1 });
      getData();
    } else {
      handleDelete();
    }
  };

  const handleIncrease = async () => {
    await axios.put(`${BASE_URL}/${id}`, { ...product, amount: amount + 1 });
    getData();
  };

  const handleDelete = async () => {
    window.confirm("Do you want to delete this product?");
    await axios.delete(`${BASE_URL}/${id}`);
    getData();
  };

  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
            onClick={() => navigate("/update-product", { state: {product} })}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {name}
            </h5>
            <div className="product-price d-flex flex-wrap align-items-center">
              <span className="damping-price text-warning h2">
                ${price * dampingRate}
              </span>
              <span className="h5 text-dark text-decoration-line-through">
                {price}
              </span>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleDecrease}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleIncrease}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleDelete}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $
              <span className="product-line-price">
                {(price * dampingRate * amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
