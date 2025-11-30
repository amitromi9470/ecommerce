import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

/**
 * Redux store configuration
 * Combines cart and order reducers
 */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

