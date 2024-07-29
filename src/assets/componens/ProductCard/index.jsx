import React from "react";
import "./index.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">
        <span className="old-price">Old Price: ${product.oldPrice}</span> <br />
        New Price: ${product.newPrice}
      </p>
      <p className="category">Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;
