import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/Cart';
const store = configureStore({
  reducers: {
    cart: cartSlice,
  },
});

export default store;
