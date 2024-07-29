import React, { useState, useEffect } from "react";
import "./index.css";

const Details = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const Product_inp = async () => {
      const response = await fetch(
        `https://cars-pagination.onrender.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    Product_inp();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <img src={product.image} alt="rasm" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">
        <span className="old-price">Old Price: ${product.oldPrice}</span> New
        Price: ${product.newPrice}
      </p>
      <p className="category">Category: {product.category}</p>
    </div>
  );
};

export default Details;
