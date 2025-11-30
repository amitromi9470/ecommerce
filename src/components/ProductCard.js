import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, selectCartItems } from '../redux/cartSlice';
import '../styles/ProductCard.css';

/**
 * ProductCard Component
 * Displays individual product with add to cart functionality
 * Shows quantity controls if item is already in cart
 */
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  // Check if product is in cart
  const cartItem = cartItems.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ productId: product.id, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ productId: product.id, quantity: quantity - 1 }));
    } else {
      dispatch(updateQuantity({ productId: product.id, quantity: 0 }));
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {!isInCart ? (
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <button className="qty-btn" onClick={handleDecrement}>−</button>
              <span className="qty-display">{quantity}</span>
              <button className="qty-btn" onClick={handleIncrement}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

