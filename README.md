# Ecommerce Store with Discount Coupon System

A fully functional ecommerce store built with React and Redux, featuring a dynamic discount coupon system where every nth order receives a 10% discount code.

## 🚀 Features

- **Product Browsing**: View a catalog of 12 diverse products across multiple categories
- **Search & Filter**: Search products by name/description and filter by category
- **Shopping Cart**: Add items to cart, update quantities, and remove items
- **Discount Coupons**: Apply discount codes during checkout for 10% off
- **Checkout**: Complete order placement with real-time coupon validation
- **Responsive Design**: Beautiful, modern UI that works on all devices

## 🛠️ Technology Stack

- **React 18.2.0** - UI framework
- **Redux Toolkit 2.0.1** - State management
- **React-Redux 9.0.4** - React bindings for Redux
- **CSS3** - Custom styling (no CSS frameworks)
- **Jest & React Testing Library** - Unit testing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🧪 Running Tests

Run all unit tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm test -- --coverage
```

### Discount Coupon System

1. **Automatic Generation**: Every nth order (default is 3) automatically generates a discount code
2. **Coupon Format**: Auto-generated codes follow the pattern `DISCOUNT{orderNumber}` (e.g., DISCOUNT3, DISCOUNT6)
3. **Single Use**: Each discount code can only be used once
4. **Validation**: The checkout process validates if a code is valid and unused before applying the discount
5. **10% Discount**: All discount codes provide 10% off the entire order

### State Management

The application uses Redux Toolkit for centralized state management:

#### Cart Slice
- Manages shopping cart items
- Handles add, remove, and update quantity operations
- Manages applied coupon state
- Calculates cart totals

#### Order Slice
- Manages order history
- Handles discount code generation
- Validates coupon codes

### In-Memory Store

All data is stored in Redux state (in-memory), meaning:
- Data persists during the session
- Data resets when the page is refreshed
- No backend database required

## 🧭 User Guide

### Shopping Flow

1. **Browse Products**
   - View all available products on the Products page
   - Use the search bar to find specific items
   - Filter by category (Electronics, Sports, Home, Accessories)

2. **Add to Cart**
   - Click "Add to Cart" on any product
   - View cart count in the header navigation

3. **Manage Cart**
   - Navigate to Cart page
   - Update quantities using the dropdown
   - Remove unwanted items
   - View subtotal and total

4. **Apply Discount**
   - Enter a valid discount code in the coupon field
   - Click "Apply" to see the discount
   - Discount is reflected in the total

5. **Checkout**
   - Click "Proceed to Checkout"
   - Order is placed successfully
   - Cart is cleared automatically
   - New discount code may be generated (every 3rd order)

## 🧪 Testing

The project includes comprehensive unit tests for:

### Redux Slices
- **cartSlice.test.js**: Tests cart operations and selectors
- **orderSlice.test.js**: Tests order placement and discount generation

### Components
- **App.test.js**: Tests main app rendering
- **ProductCard.test.js**: Tests product display and interactions
- **Cart.test.js**: Tests cart functionality and checkout

### Test Coverage
- Redux actions and reducers
- Selector functions
- Component rendering
- User interactions
- Edge cases

## 🎨 Design Decisions

### State Management
- **Redux Toolkit**: Chosen for its simplicity and built-in best practices
- **Normalized State**: Efficient state structure for easy updates
- **Selectors**: Computed values using selector functions

### UI/UX
- **Modern Design**: Gradient colors, smooth transitions, card-based layouts
- **Responsive**: Mobile-first approach with breakpoints
- **User Feedback**: Visual feedback for all actions (hover states, success modals)
- **Accessibility**: Semantic HTML, proper button usage

### Code Organization
- **Component-based**: Modular, reusable components
- **Separation of Concerns**: Separate files for styles, logic, and data
- **Comments**: Comprehensive documentation in code
- **Naming Conventions**: Clear, descriptive names

## 📝 Assumptions

1. **No Backend**: All data stored in-memory (Redux state)
2. **No Authentication**: No login/signup required
3. **Single Session**: Data doesn't persist across page refreshes
4. **Discount Application**: Discount applies to entire order, not individual items
5. **Coupon Usage**: Each code can only be used once
6. **Order Numbering**: Sequential, based on array length

## 🔮 Future Enhancements

- Local storage persistence
- Multiple discount types (percentage, fixed amount)
- Product inventory management
- Order tracking
- Customer profiles
- Backend API integration
- Payment gateway integration
- Email notifications
- Product reviews and ratings

## 📄 License

This project is created as a demonstration of React and Redux skills.

## 👤 Author

Created as part of a coding exercise to demonstrate:
- React component development
- Redux state management
- Modern CSS styling
- Unit testing practices
- Code organization and documentation

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

---

**Happy Shopping! 🛍️**
