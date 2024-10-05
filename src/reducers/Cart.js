import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] },
  reducers: {
    AddCount(state, action) {
      state.cart = state.cart.map(item =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    MinusCount(state, action) {
      const currentItem = state.cart.find(item => item.id === action.payload);
      if (currentItem.count === 1) cartSlice.caseReducers.RemoveFromCart();
      state.cart = state.cart.map(item =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      );
    },
    RemoveFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { AddCount, MinusCount, RemoveFromCart } = cartSlice.actions;
