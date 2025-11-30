import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/App.css';

/**
 * Main App Component
 * Manages view navigation and renders appropriate components
 */
function App() {
  const [activeView, setActiveView] = useState('products');

  const renderView = () => {
    switch (activeView) {
      case 'products':
        return <ProductList />;
      case 'cart':
        return <Cart setActiveView={setActiveView} />;
      default:
        return <ProductList />;
    }
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Header activeView={activeView} setActiveView={setActiveView} />
        <main className="main-content">
          {renderView()}
        </main>
        <footer className="footer">
          <p>&copy; 2025 Ecommerce Store. All rights reserved.</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;

