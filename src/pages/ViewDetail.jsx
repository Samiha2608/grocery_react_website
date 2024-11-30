import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchProductById } from '../redux/productPageSlice';
import { addToCart } from '../redux/cartSlice';

const ViewDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productPage.selectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="font-sans bg-gray-300">
      <Header />
      <div className="container mx-auto py-8 px-4 bg-gray-300">
        {product ? (
          <div className="flex flex-col md:flex-row bg-white border border-gray-400 p-4 rounded-lg shadow-lg">
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold mb-4">{product.price}</p>
              <button 
                onClick={handleAddToCart}
                className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewDetail;
