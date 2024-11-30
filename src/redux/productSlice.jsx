import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: 'Product 1',
      category: 'fruit',
      description: 'Description for Product 1',
      images: ['/images/ProductImages/1.jpeg'],
        price:26
    },
    {
      id: 2,
      title: 'Product 2',
      category: 'topseller',
      description: 'Description for Product 2',
      images: ['/images/ProductImages/2.jpeg'],
        price:26    },
    {
      id: 3,
      title: 'Product 3',
      category: 'vegetable',
      description: 'Description for Product 3',
      images: ['/images/ProductImages/3.jpeg'],
         price:26
    },
    {
      id: 4,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/4.jpeg'],
          price:26
    },
    {
      id: 5,
      title: 'Product 4',
      category: 'topseller',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/5.jpeg'],
        price:26    },
    {
      id: 6,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/6.jpeg'],
        price:26
    },
    {
      id: 7,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/7.jpeg'],
          price:26
    },
    {
      id: 8,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/8.jpeg'],
      price:26
    },
    {
      id: 9,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/9.jpeg'],
      price:26
    },
    {
      id: 10,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/10.jpeg'],
       price:26
    },
    {
      id: 11,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/11.jpeg'],
     price:26
    },
    {
      id: 12,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/12.jpeg'],
        price:26
    },
    {
      id: 13,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/13.jpeg'],
    price:26
    },
    {
      id: 14,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/14.jpeg'],
         price:26
    },
    {
      id: 15,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/15.jpeg'],
    price:26
    },
    {
      id: 16,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/16.jpeg'],
       price:26
    },
    {
      id: 17,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/17.jpeg'],
       price:26
    },
    {
      id: 18,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/18.jpeg'],
      price:26
    },
    {
      id: 19,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/19.jpeg'],
    price:26
    },
    {
      id: 20,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
    price:26
    },
    {
      id: 21,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/21.jpeg'],
    price:26
    },
    {
      id: 22,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/22.jpeg'],
          price:26
    },
    {
      id: 23,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/23.jpeg'],
        price:26
    },
    {
      id: 24,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
    price:26
    },
    {
      id: 25,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/25.jpeg'],
    price:26
    },
    {
      id: 26,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      price:26
    },
    {
      id: 27,
      title: 'Product 4',
      category: 'topseller',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/27.jpeg'],
     price:26
    },
    {
      id: 28,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/28.jpeg'],
          price:26
    },
    {
      id: 29,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/29.jpeg'],
          price:26
    },
    {
      id: 30,
      title: 'Product 4',
      category: 'topseller',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/30.jpeg'],
          price:26
    },
    {
      id: 31,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/31.jpeg'],
          price:26
    },
    {
      id: 32,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/32.jpeg'],
          price:26
    },
    {
      id: 33,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/33.jpeg'],
          price:26
    },
    {
      id: 33,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/33.jpeg'],
          price:26
    },
    {
      id: 34,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/34.jpeg'],
          price:26
    },
    {
      id: 35,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/35.jpeg'],
          price:26
    },
    {
      id: 36,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/36.jpeg'],
          price:26
    },
    {
      id: 37,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/37.jpeg'],
          price:26
    },
    {
      id: 38,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/38.jpeg'],
          price:26
    },
    {
      id: 39,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/39.jpeg'],
          price:26
    },
    {
      id: 40,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/40.jpeg'],
          price:26
    },
    {
      id: 41,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/41.jpeg'],
          price:26
    },
    {
      id: 42,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/42.jpeg'],
          price:26
    },
    {
      id: 43,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/43.jpeg'],
          price:26
    }
    ,
    {
      id: 44,
      title: 'Product 4',
      category: 'gradients',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/44.jpeg'],
          price:26
    },
    {
      id: 45,
      title: 'Product 4',
      category: 'milk',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/45.jpeg'],
          price:26
    },
    {
      id: 46,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/46.jpeg'],
          price:26
    },
    {
      id: 47,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/47.jpeg'],
          price:26
    },
    {
      id: 48,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/48.jpeg'],
          price:26
    },

    {
      id: 50,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/50.jpeg'],
          price:26
    },
    {
      id: 51,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/51.jpeg'],
          price:26
    },
    {
      id: 52,
      title: 'Product 4',
      category: 'vegetable',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/52.jpeg'],
          price:26
    },
    {
      id: 53,
      title: 'Product 4',
      category: 'softdrink',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/53.jpeg'],
          price:26
    },
    {
      id: 54,
      title: 'Product 4',
      category: 'fruit',
      description: 'Description for Product 4',
      images: ['/images/ProductImages/54.jpeg'],
          price:26
    }
  ]
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
