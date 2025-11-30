import { createSlice } from '@reduxjs/toolkit';

/**
 * Cart Slice - manages shopping cart state
 * Handles adding, removing, and updating quantities of items in cart
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items with product info and quantity
    appliedCoupon: null, // Currently applied discount coupon
  },
  reducers: {
    /**
     * Add item to cart or increase quantity if already exists
     */
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    
    /**
     * Remove item from cart completely
     */
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    
    /**
     * Update quantity of a specific item
     */
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.id !== productId);
        } else {
          item.quantity = quantity;
        }
      }
    },
    
    /**
     * Apply discount coupon to cart
     */
    applyCoupon: (state, action) => {
      state.appliedCoupon = action.payload;
    },
    
    /**
     * Remove applied coupon
     */
    removeCoupon: (state) => {
      state.appliedCoupon = null;
    },
    
    /**
     * Clear entire cart (after successful checkout)
     */
    clearCart: (state) => {
      state.items = [];
      state.appliedCoupon = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectAppliedCoupon = (state) => state.cart.appliedCoupon;
export const selectCartTotal = (state) => {
  return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
export const selectCartItemsCount = (state) => {
  return state.cart.items.reduce((count, item) => count + item.quantity, 0);
};

export default cartSlice.reducer;

