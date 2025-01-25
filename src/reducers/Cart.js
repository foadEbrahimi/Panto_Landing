import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      // action => product obj
      state.cart.push(action.payload);
    },
    addCount(state, action) {
      // action => id
      const item = state.cart.find(item => item.id === action.payload);
      item.count++;
      item.totalprice = item.count * item.price;
    },
    minusCount(state, action) {
      // action => id
      const item = state.cart.find(item => item.id === action.payload);
      item.count--;
      item.totalprice = item.count * item.price;
      if (item.count === 0)
        cartSlice.caseReducers.deleteItem(state, { payload: action.payload });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        cartItem => cartItem.id !== action.payload
      );
    },
    clearCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const getTotalCartCount = store => store.cart.cart.length;

export const getTotalCartPrice = store =>
  store.cart.cart.reduce((sum, item) => sum + item.totalprice, 0);

export const getCurrentQuantityById = id => store =>
  store.cart.cart.find(item => item.id === id)?.count ?? 0;

export const { addItem, addCount, minusCount, deleteItem, clearCart } =
  cartSlice.actions;
