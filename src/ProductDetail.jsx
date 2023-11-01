import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css'; 


function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details: ', error);
      });
  }, [id]);


  //If there is error loading server
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-card">
      <h2>PRODUCT DETAILS</h2>
      <div className="product-detail-row">
        <p>Name: {product.title}</p>
      </div>
      <div className="product-detail-row">
        <p>Description: {product.description}</p>
      </div>
      <div className="product-detail-row">
        <p>Price: {product.price}</p>
      </div>
      <div className="product-detail-row">
        <p>Discount Percentage: {product.discountPercentage}</p>
      </div>
      <div className="product-detail-row">
        <p>Rating: {product.rating}</p>
      </div>
      <div className="product-detail-row">
        <p>Stock: {product.stock}</p>
      </div>
      <div className="product-detail-row">
        <p>Brand: {product.brand}</p>
      </div>
      <div className="product-detail-row">
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
