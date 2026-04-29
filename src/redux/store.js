import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import heartReducer from './heartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    heart: heartReducer,
  },
});
