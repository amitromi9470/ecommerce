import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  clearCart,
  selectCartTotal,
  selectCartItemsCount,
} from './cartSlice';

describe('cartSlice', () => {
  const initialState = {
    items: [],
    appliedCoupon: null,
  };

  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 7999,
    description: 'Test description',
  };

  test('should return initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should add item to cart', () => {
    const actual = cartReducer(initialState, addToCart(mockProduct));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0]).toEqual({ ...mockProduct, quantity: 1 });
  });

  test('should increase quantity when adding existing item', () => {
    const stateWithItem = {
      items: [{ ...mockProduct, quantity: 1 }],
      appliedCoupon: null,
    };
    const actual = cartReducer(stateWithItem, addToCart(mockProduct));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0].quantity).toBe(2);
  });

  test('should remove item from cart', () => {
    const stateWithItem = {
      items: [{ ...mockProduct, quantity: 1 }],
      appliedCoupon: null,
    };
    const actual = cartReducer(stateWithItem, removeFromCart(mockProduct.id));
    expect(actual.items).toHaveLength(0);
  });

  test('should update item quantity', () => {
    const stateWithItem = {
      items: [{ ...mockProduct, quantity: 1 }],
      appliedCoupon: null,
    };
    const actual = cartReducer(
      stateWithItem,
      updateQuantity({ productId: mockProduct.id, quantity: 5 })
    );
    expect(actual.items[0].quantity).toBe(5);
  });

  test('should remove item when quantity updated to 0', () => {
    const stateWithItem = {
      items: [{ ...mockProduct, quantity: 1 }],
      appliedCoupon: null,
    };
    const actual = cartReducer(
      stateWithItem,
      updateQuantity({ productId: mockProduct.id, quantity: 0 })
    );
    expect(actual.items).toHaveLength(0);
  });

  test('should apply coupon', () => {
    const actual = cartReducer(initialState, applyCoupon('DISCOUNT10'));
    expect(actual.appliedCoupon).toBe('DISCOUNT10');
  });

  test('should remove coupon', () => {
    const stateWithCoupon = {
      items: [],
      appliedCoupon: 'DISCOUNT10',
    };
    const actual = cartReducer(stateWithCoupon, removeCoupon());
    expect(actual.appliedCoupon).toBeNull();
  });

  test('should clear cart', () => {
    const stateWithItems = {
      items: [{ ...mockProduct, quantity: 2 }],
      appliedCoupon: 'DISCOUNT10',
    };
    const actual = cartReducer(stateWithItems, clearCart());
    expect(actual.items).toHaveLength(0);
    expect(actual.appliedCoupon).toBeNull();
  });

  test('selectCartTotal should calculate correct total', () => {
    const state = {
      cart: {
        items: [
          { id: 1, price: 10, quantity: 2 },
          { id: 2, price: 20, quantity: 1 },
        ],
        appliedCoupon: null,
      },
    };
    expect(selectCartTotal(state)).toBe(40);
  });

  test('selectCartItemsCount should count all items', () => {
    const state = {
      cart: {
        items: [
          { id: 1, quantity: 2 },
          { id: 2, quantity: 3 },
        ],
        appliedCoupon: null,
      },
    };
    expect(selectCartItemsCount(state)).toBe(5);
  });
});

