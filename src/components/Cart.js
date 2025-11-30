import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  selectAppliedCoupon,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  clearCart,
} from '../redux/cartSlice';
import {
  selectDiscountCodes,
  selectDiscountPercentage,
  placeOrder,
} from '../redux/orderSlice';
import '../styles/Cart.css';

/**
 * Cart Component
 * Displays cart items, handles coupon application, and checkout
 */
const Cart = ({ setActiveView }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const appliedCoupon = useSelector(selectAppliedCoupon);
  const discountCodes = useSelector(selectDiscountCodes);
  const discountPercentage = useSelector(selectDiscountPercentage);
  
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  // Calculate discount amount
  const discountAmount = appliedCoupon ? (cartTotal * discountPercentage) / 100 : 0;
  const finalTotal = cartTotal - discountAmount;

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: parseInt(newQuantity) }));
  };

  const handleApplyCoupon = () => {
    setCouponError('');
    
    if (!couponInput.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    // Validate coupon
    const validCoupon = discountCodes.find(
      code => code.code === couponInput.trim() && !code.used
    );

    if (validCoupon) {
      dispatch(applyCoupon(couponInput.trim()));
      setCouponInput('');
    } else {
      setCouponError('Invalid or already used coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
    setCouponError('');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    // Store the final total before clearing cart
    setCheckoutTotal(finalTotal);
    
    // Show success modal first
    setShowCheckoutModal(true);
    
    // Place order
    dispatch(placeOrder({
      items: cartItems,
      total: finalTotal,
      discount: discountAmount,
      couponUsed: appliedCoupon,
    }));

    // Clear cart
    dispatch(clearCart());
    
    // Hide modal after 3 seconds and redirect to products
    setTimeout(() => {
      setShowCheckoutModal(false);
      setActiveView('products');
    }, 3000);
  };

  // Don't show empty cart if checkout modal is visible
  if (cartItems.length === 0 && !showCheckoutModal) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to get started!</p>
          <button className="continue-shopping-btn" onClick={() => setActiveView('products')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
              </div>
              <div className="cart-item-actions">
                <select
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                  className="quantity-select"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-total">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          
          {/* Coupon Section */}
          <div className="coupon-section">
            <h4>Apply Discount Coupon</h4>
            
            {/* Show available discount codes if any */}
            {discountCodes.filter(code => !code.used).length > 0 && (
              <div className="available-codes">
                <p className="available-codes-label">🎉 Available codes (click to use):</p>
                {discountCodes.filter(code => !code.used).map((code, index) => (
                  <span 
                    key={index} 
                    className="available-code-badge"
                    onClick={() => {
                      setCouponInput(code.code);
                      dispatch(applyCoupon(code.code));
                      setCouponError('');
                    }}
                    title="Click to apply this code"
                  >
                    {code.code}
                  </span>
                ))}
              </div>
            )}
            
            {!appliedCoupon ? (
              <div className="coupon-input-group">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="coupon-input"
                />
                <button onClick={handleApplyCoupon} className="apply-coupon-btn">
                  Apply
                </button>
              </div>
            ) : (
              <div className="applied-coupon">
                <span className="coupon-code">{appliedCoupon}</span>
                <button onClick={handleRemoveCoupon} className="remove-coupon-btn">
                  Remove
                </button>
              </div>
            )}
            {couponError && <p className="coupon-error">{couponError}</p>}
          </div>

          {/* Price Breakdown */}
          <div className="price-breakdown">
            <div className="price-row">
              <span>Subtotal:</span>
              <span>₹{cartTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
            {appliedCoupon && (
              <div className="price-row discount">
                <span>Discount ({discountPercentage}%):</span>
                <span>-₹{discountAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
              </div>
            )}
            <div className="price-row total">
              <span>Total:</span>
              <span>₹{finalTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          
          <button className="continue-shopping-btn" onClick={() => setActiveView('products')}>
            Continue Shopping
          </button>
        </div>
      </div>

      {/* Checkout Success Modal */}
      {showCheckoutModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully! 🎉</h2>
            <p>Thank you for shopping with us!</p>
            <p className="order-total">Amount to Pay on Delivery: ₹{checkoutTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
            <p className="happy-shopping">Happy Shopping! Come back soon! 😊</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

