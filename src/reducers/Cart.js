import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      { id: 1, name: 'foad', count: 10 },
      { id: 2, name: 'miad', count: 2 },
    ],
  },
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    addCount(state, action) {
      const item = state.cart.find(item => item.id === action.payload);
      item.count++;
    },
    minusCount(state, action) {
      const item = state.cart.find(item => item.id === action.payload);
      item.count--;
      if (item.count === 0) cartSlice.caseReducers.deleteItem();
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const getTotalCartCount = store =>
  store.cart.cart.reduce((sum, item) => sum + item.count, 0);

export const getTotalCartPrice = store =>
  store.cart.cart.reduce((sum, item) => sum + item.price, 0);

export const getCurrentQuantityById = id => store =>
  store.cart.cart.find(item => item.id === id)?.count ?? 0;

export const { addItem, addCount, minusCount, deleteItem } = cartSlice.actions;
