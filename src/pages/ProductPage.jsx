import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Adjust the import path according to your project structure
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
  const products = useSelector((state) => state.productPage.productPageProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const renderProductCards = (productsToRender) => (
    productsToRender.map((product) => (
      <div key={product.id} className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg">
        {product.isBigImage ? (
          <div className="relative">
            <Link to={`/productPage/${product.id}`}>
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </Link>
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Link to={`/productPage/${product.id}`}>
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
            </Link>
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    ))
  );

  return (
    <div className="font-sans">
      <Header />
      
      <header className="bg-gray-800 text-white py-8 pt-16 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Tasty and Fresh</h1>
            <p className="text-lg mb-4">Discover our exclusive range of fresh and tasty products.</p>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300">
              Buy Now
            </button>
          </div>
          <img 
            src="/images/ProductPageImages/1.jpeg" 
            alt="Product Header" 
            className="w-full md:w-1/2 h-60 object-cover rounded-lg mt-4 md:mt-0"
          />
        </div>
      </header>

      {/* Product Listings */}
      <section className="py-8">
        <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? renderProductCards(products.slice(0, 8)) : <p>Loading products...</p>}
        </div>
      </section>

      {/* Background Image with Text and Image */}
      <section 
        className="bg-cover bg-center py-16 relative"
        style={{ backgroundImage: 'url(/images/ProductPageImages/13.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto text-left px-4">
          <h2 className="text-3xl font-bold text-white mb-2">Don't Miss Out!</h2>
          <p className="text-lg text-white mb-8">Explore our collection and find your favorite products today.</p>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 z-20">
          <img 
            src="/images/ProductPageImages/16.jpeg" 
            alt="Special Offer" 
            className="w-1/2 h-auto rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-8">
        <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? renderProductCards(products.slice(8, 16)) : <p>Loading products...</p>}
        </div>
      </section>

      {/* Big Images with Add to Cart Button and Description */}
      <section className="py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2">
            <img 
              src="/images/ProductPageImages/12.jpeg" 
              alt="Big Image 1" 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-xl font-semibold mb-2">Big Image 1</h3>
              <p className="text-gray-600">This is a description of the first big image. It highlights the features of the product or promotion.</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300 mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <img 
              src="/images/ProductPageImages/13.jpeg" 
              alt="Big Image 2" 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg w-full">
              <h3 className="text-xl font-semibold mb-2">Big Image 2</h3>
              <p className="text-gray-600">This is a description of the second big image. It emphasizes the unique aspects of this product or offer.</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300 mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Background Image with Centered Text */}
      <section 
        className="bg-cover bg-center py-16 relative"
        style={{ backgroundImage: 'url(/images/ProductPageImages/21.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto text-left px-4">
          <h2 className="text-3xl font-bold text-white mb-2">Don't Miss Out!</h2>
          <p className="text-lg text-white mb-8">Explore our collection and find your favorite products today.</p>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 z-20">
          <img 
            src="/images/ProductPageImages/15.jpeg" 
            alt="Special Offer" 
            className="w-1/2 h-auto rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-8">
        <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? renderProductCards(products.slice(16, 24)) : <p>Loading products...</p>}
        </div>
      </section>

      {/* Final Background Image with Centered Text */}
      <section 
        className="bg-cover bg-center py-16 relative"
        style={{ backgroundImage: 'url(/images/ProductPageImages/17.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-2">Join Our Newsletter</h2>
          <p className="text-lg text-white mb-8">Stay updated with our latest offers and products.</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="py-2 px-4 rounded-lg mb-4"
          />
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300">
            Subscribe
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
