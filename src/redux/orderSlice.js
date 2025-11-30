import { createSlice } from '@reduxjs/toolkit';

/**
 * Order Slice - manages order history and discount coupon generation
 * Implements nth order discount logic
 */
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [], // Array of completed orders
    discountCodes: [], // Array of generated discount codes
    nthOrderValue: 3, // Every 3rd order gets a discount (configurable)
    discountPercentage: 10, // 10% discount
  },
  reducers: {
    /**
     * Place a new order and generate discount code if applicable
     */
    placeOrder: (state, action) => {
      const { items, total, discount, couponUsed } = action.payload;
      
      const newOrder = {
        id: Date.now(),
        items: items,
        total: total,
        discount: discount || 0,
        couponUsed: couponUsed || null,
        timestamp: new Date().toISOString(),
      };
      
      state.orders.push(newOrder);
      
      // Mark coupon as used if one was applied
      if (couponUsed) {
        const couponIndex = state.discountCodes.findIndex(
          code => code.code === couponUsed && !code.used
        );
        if (couponIndex !== -1) {
          state.discountCodes[couponIndex].used = true;
        }
      }
      
      // Check if new discount code should be generated (every nth order)
      if (state.orders.length % state.nthOrderValue === 0) {
        const newCouponCode = `DISCOUNT${state.orders.length}`;
        state.discountCodes.push({
          code: newCouponCode,
          discount: state.discountPercentage,
          used: false,
          generatedAt: new Date().toISOString(),
          orderNumber: state.orders.length,
        });
      }
    },
    
    /**
     * Admin: Manually generate a discount code
     */
    generateDiscountCode: (state) => {
      const newCouponCode = `ADMIN${Date.now()}`;
      state.discountCodes.push({
        code: newCouponCode,
        discount: state.discountPercentage,
        used: false,
        generatedAt: new Date().toISOString(),
        orderNumber: state.orders.length,
      });
    },
    
    /**
     * Admin: Update nth order value
     */
    updateNthOrderValue: (state, action) => {
      state.nthOrderValue = action.payload;
    },
  },
});

export const { placeOrder, generateDiscountCode, updateNthOrderValue } = orderSlice.actions;

// Selectors
export const selectOrders = (state) => state.order.orders;
export const selectDiscountCodes = (state) => state.order.discountCodes;
export const selectNthOrderValue = (state) => state.order.nthOrderValue;
export const selectDiscountPercentage = (state) => state.order.discountPercentage;

// Get available (unused) discount codes
export const selectAvailableDiscountCodes = (state) => {
  return state.order.discountCodes.filter(code => !code.used);
};

// Validate if a discount code is valid and unused
export const selectIsValidCoupon = (state, couponCode) => {
  if (!couponCode) return false;
  const coupon = state.order.discountCodes.find(
    code => code.code === couponCode && !code.used
  );
  return !!coupon;
};

// Admin statistics
export const selectAdminStats = (state) => {
  const orders = state.order.orders;
  const totalItemsPurchased = orders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
  }, 0);
  
  const totalPurchaseAmount = orders.reduce((sum, order) => sum + order.total, 0);
  const totalDiscountAmount = orders.reduce((sum, order) => sum + order.discount, 0);
  
  return {
    totalOrders: orders.length,
    totalItemsPurchased,
    totalPurchaseAmount,
    totalDiscountAmount,
    discountCodes: state.order.discountCodes,
  };
};

export default orderSlice.reducer;

