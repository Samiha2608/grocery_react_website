// rootReducer.js
import { combineReducers } from 'redux';
import productsReducer from './productsSlice';
import productPageReducer from './productPageSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  productPage: productPageReducer,
});

export default rootReducer;
