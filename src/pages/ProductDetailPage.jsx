import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust the import path according to your project structure
import Header from '../components/Header'; // Adjust the import path
import Footer from '../components/Footer'; // Adjust the import path

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products); // Adjust to match your state structure
  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    dispatch(addToCart(product)); // Add the product to the cart
    navigate(`/checkout`);
  };

  return (
    <div className="bg-gray-300 text-black min-h-screen">
      <Header className="text-black" /> {/* Apply text-black to the Header */}
      <div className="p-8 pt-20 flex flex-col md:flex-row"> {/* Add padding-top to ensure spacing */}
        <div className="w-full md:w-1/2 p-4">
          <img src={product.images[0]} alt={product.title} className="w-full h-96 object-cover" /> {/* Adjust image size */}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-lg font-bold mb-4">Price: ${product.price}</p>
          <button 
            onClick={handleBuyNow}
            className="bg-yellow-300 text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
