"use client";

import { useEffect, useState } from 'react';
import './products.css'; // חיבור קובץ ה-CSS

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => alert(`Added ${product.name} to cart`)}>Add to Cart</button>
          </li>

        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
