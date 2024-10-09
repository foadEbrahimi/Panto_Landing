import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/Cart';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
