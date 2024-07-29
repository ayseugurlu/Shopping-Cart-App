import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate=useNavigate()
  const BASE_URL = "https://66a76a3c53c13f22a3cfa21e.mockapi.io/products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return (
      <img
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
        alt="loading"
      />
    );
    // return
  }
  return (
    <div className="product-list-container container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <img
            src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
            alt="loading"
            
          />
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
            {products.map((product)=>(
              <ProductCard
              key={product.id}
                product={product}
                getData={getData}
              />
            ))}
              
            </article>
            <article className="col-md-4 m-3">
              <CardTotal products={products} />
            </article>
          </>
        )}

        
      </div>
    </div>
  );
};

export default ProductList;
