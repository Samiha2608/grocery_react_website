// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import productPageReducer from './productPageSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    productPage: productPageReducer,
  },
});

// No RootState export needed for JavaScript
