import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('🛒 Ecommerce Store')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    expect(screen.getByText(/© 2025 Ecommerce Store. All rights reserved./i)).toBeInTheDocument();
  });

  test('renders navigation buttons', () => {
    render(<App />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
  });
});

