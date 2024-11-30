import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Use FontAwesome icons for arrows
import { addToCart } from '../redux/cartSlice'; // Import the action creator

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // State for current index for each category
  const [currentFruitsIndex, setCurrentFruitsIndex] = useState(0);
  const [currentVegetablesIndex, setCurrentVegetablesIndex] = useState(0);
  const [currentSoftdrinkIndex, setCurrentSoftdrinkIndex] = useState(0);
  const [currentGradientsIndex, setCurrentGradientsIndex] = useState(0);
  const [currentTopSellerIndex, setCurrentTopSellerIndex] = useState(0);
  const itemsPerPage = 4;

  // Filter products by category
  const fruits = products.filter(product => product.category.toLowerCase() === 'fruit');
  const vegetables = products.filter(product => product.category.toLowerCase() === 'vegetable');
  const softdrink = products.filter(product => product.category.toLowerCase() === 'softdrink');
  const gradients = products.filter(product => product.category.toLowerCase() === 'gradients');
  const topseller = products.filter(product => product.category.toLowerCase() === 'topseller');

  // Log filtered arrays for debugging
  console.log('Fruits:', fruits);
  console.log('Top Seller:', topseller);

  // Handle navigation for each section
  const handleNext = (section, setCurrentIndex, currentIndex, items) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage;
      console.log(`${section} next index:`, newIndex);
      return newIndex;
    });
  };

  const handlePrev = (section, setCurrentIndex, currentIndex, items) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage < 0 ? items.length - itemsPerPage : prevIndex - itemsPerPage;
      console.log(`${section} prev index:`, newIndex);
      return newIndex;
    });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="pt-0 bg-gray-100">
      {/* First background image with text */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/ProductImages/27.jpeg')" }}>
        <Header />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Millions of happy</h1>
          <p className="text-lg mb-8">Discover our variety of products</p>
          <button className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg">Shop Now</button>
        </div>
      </div>

      {/* Top Seller Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/ProductImages/12.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-3xl font-bold text-[#031E00] mb-8 text-center">Top Seller</h2>
        <div className="flex items-center justify-center relative">
          <button 
            onClick={() => handlePrev('topseller', setCurrentTopSellerIndex, currentTopSellerIndex, topseller)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${topseller.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4 min-w-max">
              {topseller.slice(currentTopSellerIndex, currentTopSellerIndex + itemsPerPage).map((product) => (
                <div key={product.id} className="w-64 bg-[#031E00] p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <NavLink to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4 opacity-75 cursor-pointer" />
                  </NavLink>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <p className="text-sm text-white">{product.category}</p>
                  <p className="text-sm text-white mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => handleNext('topseller', setCurrentTopSellerIndex, currentTopSellerIndex, topseller)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${topseller.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Fruits Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/ProductImages/32.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-3xl font-bold text-[#031E00] mb-8 text-center">Fruits</h2>
        <div className="flex items-center justify-center relative">
          <button 
            onClick={() => handlePrev('fruit', setCurrentFruitsIndex, currentFruitsIndex, fruits)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${fruits.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4 min-w-max">
              {fruits.slice(currentFruitsIndex, currentFruitsIndex + itemsPerPage).map((product) => (
                <div key={product.id} className="w-64 bg-[#031E00] p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <NavLink to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4 opacity-75 cursor-pointer" />
                  </NavLink>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <p className="text-sm text-white">{product.category}</p>
                  <p className="text-sm text-white mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => handleNext('fruit', setCurrentFruitsIndex, currentFruitsIndex, fruits)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${fruits.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Vegetables Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/ProductImages/13.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-3xl font-bold text-[#031E00] mb-8 text-center">Vegetables</h2>
        <div className="flex items-center justify-center relative">
          <button 
            onClick={() => handlePrev('vegetables', setCurrentVegetablesIndex, currentVegetablesIndex, vegetables)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${vegetables.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4 min-w-max">
              {vegetables.slice(currentVegetablesIndex, currentVegetablesIndex + itemsPerPage).map((product) => (
                <div key={product.id} className="w-64 bg-[#031E00] p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <NavLink to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4 opacity-75 cursor-pointer" />
                  </NavLink>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <p className="text-sm text-white">{product.category}</p>
                  <p className="text-sm text-white mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => handleNext('vegetables', setCurrentVegetablesIndex, currentVegetablesIndex, vegetables)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${vegetables.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Softdrink Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/ProductImages/31.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-3xl font-bold text-[#031E00] mb-8 text-center">Softdrinks</h2>
        <div className="flex items-center justify-center relative">
          <button 
            onClick={() => handlePrev('softdrink', setCurrentSoftdrinkIndex, currentSoftdrinkIndex, softdrink)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${softdrink.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4 min-w-max">
              {softdrink.slice(currentSoftdrinkIndex, currentSoftdrinkIndex + itemsPerPage).map((product) => (
                <div key={product.id} className="w-64 bg-[#031E00] p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <NavLink to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-4 opacity-75 cursor-pointer" />
                  </NavLink>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <p className="text-sm text-white">{product.category}</p>
                  <p className="text-sm text-white mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => handleNext('softdrink', setCurrentSoftdrinkIndex, currentSoftdrinkIndex, softdrink)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${softdrink.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="py-16 px-4 bg-cover bg-center relative" style={{ backgroundImage: "url('/images/ProductImages/33.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-3xl font-bold text-[#031E00] mb-8 text-center">Gradients</h2>
        <div className="flex items-center justify-center relative">
          <button 
            onClick={() => handlePrev('gradients', setCurrentGradientsIndex, currentGradientsIndex, gradients)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${gradients.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowLeft />
          </button>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4 min-w-max">
              {gradients.slice(currentGradientsIndex, currentGradientsIndex + itemsPerPage).map((product) => (
                <div key={product.id} className="w-64 bg-[#031E00] p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <NavLink to={`/product/${product.id}`}>
      <img 
        src={product.images && product.images.length > 0 ? product.images[0] : '/path/to/default-image.jpg'} 
        alt={product.title} 
        className="w-full h-40 object-cover rounded-lg mb-4 opacity-75 cursor-pointer" 
      />
    </NavLink>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <p className="text-sm text-white">{product.category}</p>
                  <p className="text-sm text-white mb-4">{product.description}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="border-2 border-yellow-300 text-yellow-300 py-2 px-4 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => handleNext('gradients', setCurrentGradientsIndex, currentGradientsIndex, gradients)} 
            className={`text-[#031E00] text-2xl bg-white p-2 rounded-full shadow-md hover:shadow-lg transition ${gradients.length <= itemsPerPage ? 'hidden' : ''}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
