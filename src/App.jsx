// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store' // Adjust the path as needed
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProductPageDetail from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import ViewDetail from './pages/ViewDetail';



const App = () => {
  return (
    <Provider store={store}>
      <Router>
  
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductPageDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/store" element={<ProductPage />} />
          <Route path="/productPage/:id"  element={<ViewDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
