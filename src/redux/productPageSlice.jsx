import { createSlice } from '@reduxjs/toolkit';

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    title: 'Fresh Apple',
    description: 'Crisp and juicy apples picked fresh from the orchard.',
    images: ['/images/ProductPageImages/1.jpeg'],
    price: 2.99
  },
  {
    id: 2,
    title: 'Organic Bananas',
    description: 'Sweet and ripe organic bananas.',
    images: ['/images/ProductPageImages/2.jpeg'],
    price: 1.49
  },
  {
    id: 3,
    title: 'Green Lettuce',
    description: 'Fresh and crunchy green lettuce.',
    images: ['/images/ProductPageImages/3.jpeg'],
    price: 1.99
  },
  {
    id: 4,
    title: 'Ripe Tomatoes',
    description: 'Juicy and flavorful ripe tomatoes.',
    images: ['/images/ProductPageImages/4.jpeg'],
    price: 3.49
  },
  {
    id: 5,
    title: 'Carrots',
    description: 'Crunchy and sweet carrots, perfect for snacking.',
    images: ['/images/ProductPageImages/5.jpeg'],
    price: 2.49
  },
  {
    id: 6,
    title: 'Organic Eggs',
    description: 'Fresh organic eggs, free-range and high-quality.',
    images: ['/images/ProductPageImages/6.jpeg'],
    price: 4.99
  },
  {
    id: 7,
    title: 'Whole Grain Bread',
    description: 'Nutritious whole grain bread for a healthy start.',
    images: ['/images/ProductPageImages/7.jpeg'],
    price: 3.99
  },
  {
    id: 8,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/8.jpeg'],
    price: 2.79
  },
  {
    id: 9,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/9.jpeg'],
    price: 2.79
  },
  {
    id: 10,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/10.jpeg'],
    price: 2.79
  },
  {
    id: 11,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/11.jpeg'],
    price: 2.79
  },
  {
    id: 12,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/12.jpeg'],
    price: 2.79
  },
  {
    id: 13,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/13.jpeg'],
    price: 2.79
  },

  {
    id: 15,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/15.jpeg'],
    price: 2.79
  },
  {
    id: 16,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/16.jpeg'],
    price: 2.79
  },
  {
    id: 17,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/17.jpeg'],
    price: 2.79
  },
  {
    id: 18,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/18.jpeg'],
    price: 2.79
  },
  {
    id: 19,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/19.jpeg'],
    price:   2.79
  },
  {
    id: 20,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/20.jpeg'],
    price:   2.79
  },
  {
    id: 21,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/21.jpeg'],
    price:   2.79
  },
  {
    id: 22,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/22.jpeg'],
    price:   2.79
  },
  {
    id: 23,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/23.jpeg'],
    price:   2.79
  },
  {
    id: 24,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/24.jpeg'],
    price:   2.79
  },
  {
    id: 25,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/25.jpeg'],
    price:   2.79
  },
  {
    id: 26,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/26.jpeg'],
    price:   2.79
  },
  {
    id: 27,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/27.jpeg'],
    price:   2.79
  },
  {
    id: 28,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/28.jpeg'],
    price:   2.79
  },
  {
    id: 29,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/29.jpeg'],
    price:   2.79
  },
  {
    id: 30,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/30.jpeg'],
    price:   2.79
  },
  {
    id: 31,
    title: 'Milk',
    description: 'Fresh and creamy milk from local dairy farms.',
    images: ['/images/ProductPageImages/31.jpeg'],
    price:   2.79
  },
  // Add more dummy products if needed
];

const initialState = {
  productPageProducts: dummyProducts, // Initialize with dummy products
  selectedProduct: null,
};

// Create the product page slice
const productPageSlice = createSlice({
  name: 'productPage',
  initialState,
  reducers: {
    setProductPageProducts(state, action) {
      state.productPageProducts = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProductPageProducts, setSelectedProduct } = productPageSlice.actions;

export const fetchProductById = (id) => (dispatch, getState) => {
  const product = getState().productPage.productPageProducts.find(product => product.id === parseInt(id, 10));
  if (product) {
    dispatch(setSelectedProduct(product));
  }
};

export default productPageSlice.reducer;