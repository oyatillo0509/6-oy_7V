import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./index.css";

const Home = ({ navigateToDetails }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const Product_inp = async () => {
      const response = await fetch(
        "https://cars-pagination.onrender.com/products"
      );
      const data = await response.json();
      setProducts(data);
    };
    Product_inp();
  }, []);

  useEffect(() => {
    const Product_out = async () => {
      if (category) {
        const response = await fetch(
          `https://cars-pagination.onrender.com/products/category?category=${category}`
        );
        const data = await response.json();
        setProducts(data);
      } else {
        const response = await fetch(
          "https://cars-pagination.onrender.com/products"
        );
        const data = await response.json();
        setProducts(data);
      }
    };
    Product_out();
  }, [category]);

  return (
    <div className="home-container">
      <div className="product-filter">
        <label htmlFor="category">Filter: </label>
        <select id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="средний">Средний</option>
          <option value="известный">Известный</option>
          <option value="непопулярен">Не популярен</option>
        </select>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigateToDetails(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
