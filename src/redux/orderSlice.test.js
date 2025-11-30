import orderReducer, {
  placeOrder,
  generateDiscountCode,
  updateNthOrderValue,
  selectAdminStats,
  selectAvailableDiscountCodes,
} from './orderSlice';

describe('orderSlice', () => {
  const initialState = {
    orders: [],
    discountCodes: [],
    nthOrderValue: 3,
    discountPercentage: 10,
  };

  const mockOrder = {
    items: [
      { id: 1, name: 'Product 1', price: 4000, quantity: 2 },
    ],
    total: 8000,
    discount: 0,
    couponUsed: null,
  };

  test('should return initial state', () => {
    expect(orderReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  test('should place order', () => {
    const actual = orderReducer(initialState, placeOrder(mockOrder));
    expect(actual.orders).toHaveLength(1);
    expect(actual.orders[0].total).toBe(100);
  });

  test('should generate discount code on 3rd order', () => {
    let state = initialState;
    
    // Place 3 orders
    state = orderReducer(state, placeOrder(mockOrder));
    state = orderReducer(state, placeOrder(mockOrder));
    state = orderReducer(state, placeOrder(mockOrder));
    
    expect(state.orders).toHaveLength(3);
    expect(state.discountCodes).toHaveLength(1);
    expect(state.discountCodes[0].code).toBe('DISCOUNT3');
  });

  test('should mark coupon as used when applied to order', () => {
    const stateWithCoupon = {
      ...initialState,
      discountCodes: [
        { code: 'TEST10', discount: 10, used: false, generatedAt: new Date().toISOString() },
      ],
    };
    
    const orderWithCoupon = {
      ...mockOrder,
      couponUsed: 'TEST10',
      discount: 10,
    };
    
    const actual = orderReducer(stateWithCoupon, placeOrder(orderWithCoupon));
    expect(actual.discountCodes[0].used).toBe(true);
  });

  test('should manually generate discount code', () => {
    const actual = orderReducer(initialState, generateDiscountCode());
    expect(actual.discountCodes).toHaveLength(1);
    expect(actual.discountCodes[0].code).toContain('ADMIN');
  });

  test('should update nth order value', () => {
    const actual = orderReducer(initialState, updateNthOrderValue(5));
    expect(actual.nthOrderValue).toBe(5);
  });

  test('selectAvailableDiscountCodes should filter unused codes', () => {
    const state = {
      order: {
        ...initialState,
        discountCodes: [
          { code: 'CODE1', used: false },
          { code: 'CODE2', used: true },
          { code: 'CODE3', used: false },
        ],
      },
    };
    
    const available = selectAvailableDiscountCodes(state);
    expect(available).toHaveLength(2);
    expect(available[0].code).toBe('CODE1');
    expect(available[1].code).toBe('CODE3');
  });

  test('selectAdminStats should calculate correct statistics', () => {
    const state = {
      order: {
        orders: [
          {
            items: [{ quantity: 2 }, { quantity: 1 }],
            total: 100,
            discount: 10,
          },
          {
            items: [{ quantity: 3 }],
            total: 150,
            discount: 0,
          },
        ],
        discountCodes: [
          { code: 'CODE1', used: false },
          { code: 'CODE2', used: true },
        ],
        nthOrderValue: 3,
        discountPercentage: 10,
      },
    };
    
    const stats = selectAdminStats(state);
    expect(stats.totalOrders).toBe(2);
    expect(stats.totalItemsPurchased).toBe(6);
    expect(stats.totalPurchaseAmount).toBe(250);
    expect(stats.totalDiscountAmount).toBe(10);
    expect(stats.discountCodes).toHaveLength(2);
  });
});

