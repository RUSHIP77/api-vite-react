import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error('API response does not contain an array of products');
        }
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              {product.image && <img src={product.image} alt={product.title} />}
              <p>{product.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
