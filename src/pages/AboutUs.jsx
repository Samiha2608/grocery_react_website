import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      
<Header />
      {/* Background Image and Main Content */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/About Us/1.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to improve text readability */}
        <div className="relative z-10 text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Welcome to our grocery store! We are dedicated to providing you with the best products and services to meet all your grocery needs.</p>
        </div>
      </div>

      {/* About Our Services */}
      <div className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { image: '/images/About Us/4.jpeg', text: 'High Quality Products' },
            { image: '/images/About Us/5.jpeg', text: 'Friendly Customer Service' },
            { image: '/images/About Us/6.jpeg', text: 'Fast Delivery' }
          ].map((service, index) => (
            <div key={index} className="w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={service.image} alt={service.text} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-center text-lg font-semibold">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col lg:flex-row py-16 px-4 gap-8 items-center">
        <img src="/images/About Us/7.jpeg" alt="About Us" className="w-full lg:w-1/2 h-80 object-cover rounded-lg" />
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg">Our grocery store has been serving the community for over a decade. We offer a wide selection of products, from fresh produce to household essentials. Our team is committed to ensuring that you have a great shopping experience every time you visit us.</p>
        </div>
      </div>

     <Footer />
    </div>
  );
};

export default AboutUs;
