import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductCard from './ProductCard';
import cartReducer from '../redux/cartSlice';
import orderReducer from '../redux/orderSlice';

const mockProduct = {
  id: 1,
  name: 'Wireless Headphones',
  price: 6499,
  description: 'High-quality wireless headphones',
  image: 'https://via.placeholder.com/200',
  category: 'Electronics',
};

const renderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      order: orderReducer,
    },
  });
  
  return render(<Provider store={store}>{component}</Provider>);
};

describe('ProductCard', () => {
  test('renders product information', () => {
    renderWithRedux(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('₹6,499')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('High-quality wireless headphones')).toBeInTheDocument();
  });

  test('displays product image', () => {
    renderWithRedux(<ProductCard product={mockProduct} />);
    
    const image = screen.getByAltText('Wireless Headphones');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  test('add to cart button is clickable', () => {
    renderWithRedux(<ProductCard product={mockProduct} />);
    
    const addButton = screen.getByText('Add to Cart');
    expect(addButton).toBeInTheDocument();
    
    fireEvent.click(addButton);
    // After clicking, quantity controls should appear instead of button
    expect(screen.queryByText('Add to Cart')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument(); // quantity display
  });
});

