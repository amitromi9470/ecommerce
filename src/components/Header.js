import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../redux/cartSlice';
import '../styles/Header.css';

/**
 * Header Component
 * Displays navigation and cart icon with item count
 */
const Header = ({ activeView, setActiveView }) => {
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🛒 Ecommerce Store</h1>
        <nav className="nav">
          <button
            className={`nav-btn ${activeView === 'products' ? 'active' : ''}`}
            onClick={() => setActiveView('products')}
          >
            Products
          </button>
          <button
            className={`nav-btn ${activeView === 'cart' ? 'active' : ''}`}
            onClick={() => setActiveView('cart')}
          >
            Cart {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

