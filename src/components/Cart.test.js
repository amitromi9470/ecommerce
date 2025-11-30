import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Cart from './Cart';
import cartReducer, { addToCart } from '../redux/cartSlice';
import orderReducer from '../redux/orderSlice';

const mockSetActiveView = jest.fn();

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 7999,
  description: 'Test description',
  image: 'https://via.placeholder.com/200',
};

const renderWithRedux = (component, preloadedState = {}) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      order: orderReducer,
    },
    preloadedState,
  });
  
  return render(<Provider store={store}>{component}</Provider>);
};

describe('Cart', () => {
  test('displays empty cart message when cart is empty', () => {
    renderWithRedux(<Cart setActiveView={mockSetActiveView} />);
    
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByText('Add some products to get started!')).toBeInTheDocument();
  });

  test('displays cart items when cart has products', () => {
    const preloadedState = {
      cart: {
        items: [{ ...mockProduct, quantity: 1 }],
        appliedCoupon: null,
      },
      order: {
        orders: [],
        discountCodes: [],
        nthOrderValue: 3,
        discountPercentage: 10,
      },
    };
    
    renderWithRedux(<Cart setActiveView={mockSetActiveView} />, preloadedState);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('₹7,999')).toBeInTheDocument();
  });

  test('displays coupon input section', () => {
    const preloadedState = {
      cart: {
        items: [{ ...mockProduct, quantity: 1 }],
        appliedCoupon: null,
      },
      order: {
        orders: [],
        discountCodes: [],
        nthOrderValue: 3,
        discountPercentage: 10,
      },
    };
    
    renderWithRedux(<Cart setActiveView={mockSetActiveView} />, preloadedState);
    
    expect(screen.getByPlaceholderText('Enter coupon code')).toBeInTheDocument();
    expect(screen.getByText('Apply')).toBeInTheDocument();
  });

  test('displays correct total', () => {
    const preloadedState = {
      cart: {
        items: [
          { ...mockProduct, id: 1, price: 4000, quantity: 2 },
          { ...mockProduct, id: 2, price: 2500, quantity: 1 },
        ],
        appliedCoupon: null,
      },
      order: {
        orders: [],
        discountCodes: [],
        nthOrderValue: 3,
        discountPercentage: 10,
      },
    };
    
    renderWithRedux(<Cart setActiveView={mockSetActiveView} />, preloadedState);
    
    // Subtotal should be 4000*2 + 2500*1 = 10500
    expect(screen.getByText('₹10,500')).toBeInTheDocument();
  });

  test('continue shopping button navigates to products', () => {
    renderWithRedux(<Cart setActiveView={mockSetActiveView} />);
    
    const continueButton = screen.getByText('Continue Shopping');
    fireEvent.click(continueButton);
    
    expect(mockSetActiveView).toHaveBeenCalledWith('products');
  });
});

