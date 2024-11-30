import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cartSlice';
import { FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    shippingInfo: { address: '', city: '', postalCode: '', paymentMethod: '' },
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatePersonalInfo = () => {
    const errors = {};
    if (!personalInfo.name) errors.name = 'Name is required';
    if (!personalInfo.email) errors.email = 'Email is required';
    if (!personalInfo.phone) errors.phone = 'Phone is required';
    return errors;
  };

  const validateShippingInfo = () => {
    const errors = {};
    if (!shippingInfo.address) errors.address = 'Address is required';
    if (!shippingInfo.city) errors.city = 'City is required';
    if (!shippingInfo.postalCode) errors.postalCode = 'Postal Code is required';
    if (!shippingInfo.paymentMethod) errors.paymentMethod = 'Payment Method is required';
    return errors;
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleNextStep = () => {
    if (step === 1) {
      const personalErrors = validatePersonalInfo();
      if (Object.keys(personalErrors).length === 0) {
        setErrors((prevErrors) => ({ ...prevErrors, personalInfo: {} }));
        setStep(2);
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, personalInfo: personalErrors }));
      }
    } else if (step === 2) {
      const shippingErrors = validateShippingInfo();
      if (Object.keys(shippingErrors).length === 0) {
        setErrors((prevErrors) => ({ ...prevErrors, shippingInfo: {} }));
        setStep(3);
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, shippingInfo: shippingErrors }));
      }
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Header />

      <main className="flex-1 p-8 mt-10">
        <div className="bg-gray-900 text-white p-4 text-center text-2xl mb-4">Checkout</div>
        {orderPlaced ? (
          <div className="text-center">
            <div className="text-green-600 text-2xl mb-4">Your order has been placed!</div>
            <button
              onClick={() => navigate('/home')}
              className="bg-yellow-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between mb-8">
              <button
                onClick={() => setStep(1)}
                className={`py-2 px-4 ${step === 1 ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setStep(2)}
                className={`py-2 px-4 ${step === 2 ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
              >
                Shipping Information
              </button>
              <button
                onClick={() => setStep(3)}
                className={`py-2 px-4 ${step === 3 ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
              >
                Order Summary
              </button>
            </div>

            <div className="steps mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>
                  <FaCheckCircle />
                </div>
                <span className="ml-2">Step 1</span>
              </div>
              <div className={`flex-1 border-t-2 ${step > 1 ? 'border-gray-800' : 'border-gray-200'}`}></div>
              <div className="flex items-center">
                <div className={`step ${step >= 2 ? 'active' : ''}`}>
                  <FaCheckCircle />
                </div>
                <span className="ml-2">Step 2</span>
              </div>
              <div className={`flex-1 border-t-2 ${step > 2 ? 'border-gray-800' : 'border-gray-200'}`}></div>
              <div className="flex items-center">
                <div className={`step ${step === 3 ? 'active' : ''}`}>
                  <FaCheckCircle />
                </div>
                <span className="ml-2">Step 3</span>
              </div>
            </div>

            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <form>
                  <label className="block mb-2">
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={personalInfo.name}
                      onChange={handlePersonalInfoChange}
                      className={`border p-2 w-full ${errors.personalInfo.name ? 'border-red-500' : ''}`}
                    />
                    {errors.personalInfo.name && <p className="text-red-500 text-sm">{errors.personalInfo.name}</p>}
                  </label>
                  <label className="block mb-2">
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      className={`border p-2 w-full ${errors.personalInfo.email ? 'border-red-500' : ''}`}
                    />
                    {errors.personalInfo.email && <p className="text-red-500 text-sm">{errors.personalInfo.email}</p>}
                  </label>
                  <label className="block mb-2">
                    Phone:
                    <input
                      type="tel"
                      name="phone"
                      value={personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      className={`border p-2 w-full ${errors.personalInfo.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.personalInfo.phone && <p className="text-red-500 text-sm">{errors.personalInfo.phone}</p>}
                  </label>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-yellow-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
                  >
                    Next
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                <form>
                  <label className="block mb-2">
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      className={`border p-2 w-full ${errors.shippingInfo.address ? 'border-red-500' : ''}`}
                    />
                    {errors.shippingInfo.address && <p className="text-red-500 text-sm">{errors.shippingInfo.address}</p>}
                  </label>
                  <label className="block mb-2">
                    City:
                    <input
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      className={`border p-2 w-full ${errors.shippingInfo.city ? 'border-red-500' : ''}`}
                    />
                    {errors.shippingInfo.city && <p className="text-red-500 text-sm">{errors.shippingInfo.city}</p>}
                  </label>
                  <label className="block mb-2">
                    Postal Code:
                    <input
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleShippingInfoChange}
                      className={`border p-2 w-full ${errors.shippingInfo.postalCode ? 'border-red-500' : ''}`}
                    />
                    {errors.shippingInfo.postalCode && <p className="text-red-500 text-sm">{errors.shippingInfo.postalCode}</p>}
                  </label>
                  <label className="block mb-2">
                    Payment Method:
                    <input
                      type="text"
                      name="paymentMethod"
                      value={shippingInfo.paymentMethod}
                      onChange={handleShippingInfoChange}
                      className={`border p-2 w-full ${errors.shippingInfo.paymentMethod ? 'border-red-500' : ''}`}
                    />
                    {errors.shippingInfo.paymentMethod && <p className="text-red-500 text-sm">{errors.shippingInfo.paymentMethod}</p>}
                  </label>
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors mr-2"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-yellow-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
                  >
                    Next
                  </button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <p>Name: {personalInfo.name}</p>
                  <p>Email: {personalInfo.email}</p>
                  <p>Phone: {personalInfo.phone}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                  <p>Address: {shippingInfo.address}</p>
                  <p>City: {shippingInfo.city}</p>
                  <p>Postal Code: {shippingInfo.postalCode}</p>
                  <p>Payment Method: {shippingInfo.paymentMethod}</p>
                </div>
                <button
                  onClick={handlePreviousStep}
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors mr-2"
                >
                  Previous
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-yellow-300 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
