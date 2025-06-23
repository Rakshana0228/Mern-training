// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch only girly products
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        const girly = response.data.filter(product =>
          product.category === "women's clothing" || product.category === "jewelery"
        );
        setProducts(girly);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Handle Add to Cart
  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="product-page">
      <h2>💖 Girly Product Collection</h2>

      {/* Show cart summary */}
      <div className="cart-summary">
        🛒 Items in Cart: {cart.length}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">₹{(product.price * 80).toFixed(2)}</p>
            <p className="category">{product.category}</p>
            <button className="buy-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Show cart items */}
      {cart.length > 0 && (
        <div className="cart-list">
          <h3>🧺 Your Cart</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} — ₹{(item.price * 80).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
