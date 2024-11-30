import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { registerUser } from '../redux/userSlice'; // Ensure the path is correct

const LoginPage = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const validateUser = (values) => {
    // Mock user validation
    const validUser = values.email === 'user@example.com' && values.password === 'password123';
    if (validUser) {
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleRegister = (values) => {
    dispatch(registerUser(values));
    setShowRegister(false);
    alert('Account created successfully. You can now log in.');
  };

  return (
    <div className="relative h-screen overflow-hidden bg-[#E0DEDE]">
      {/* Background Image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/images/picLogin.jpeg')", borderTopLeftRadius: '100px' }}
      ></div>

      {/* Login Form */}
      <div className="relative flex items-center justify-center p-8 bg-[#E0DEDE] z-20 w-1/2 h-full">
        <div className="w-full max-w-md">
          {!showForgotPassword ? (
            !showRegister ? (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">User Login</h1>
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faGoogle} className="text-4xl mx-2 text-gray-600" />
                  <span className="mx-2">or</span>
                  <FontAwesomeIcon icon={faFacebookF} className="text-4xl mx-2 text-gray-600" />
                </div>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      validateUser(values);
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-900">Email</label>
                        <Field
                          name="email"
                          type="email"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-600" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-900">Password</label>
                        <Field
                          name="password"
                          type="password"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-600" />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-2 bg-gray-300 hover:bg-gray-400 focus:border-[#E7D37F] focus:ring-[#E7D37F] border border-transparent rounded"
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="mt-4 text-center">
                  <a href="#" onClick={() => setShowForgotPassword(true)} className="text-gray-600 block">Forget Password?</a>
                  <a href="#" className="text-gray-600 block mt-4" onClick={() => setShowRegister(true)}>Don't have an account? Create Account</a>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Create Account</h1>
                <Formik
                  initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required('Required'),
                    lastName: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    password: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
                    confirmPassword: Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Required'),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      handleRegister(values);
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-900">First Name</label>
                        <Field
                          name="firstName"
                          type="text"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="firstName" component="div" className="text-red-600" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-900">Last Name</label>
                        <Field
                          name="lastName"
                          type="text"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red-600" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-900">Email</label>
                        <Field
                          name="email"
                          type="email"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-600" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-900">Password</label>
                        <Field
                          name="password"
                          type="password"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-600" />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-900">Confirm Password</label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-2 bg-gray-300 hover:bg-gray-400 focus:border-[#E7D37F] focus:ring-[#E7D37F] border border-transparent rounded"
                      >
                        Create Account
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="mt-4 text-center">
                  <button onClick={() => setShowRegister(false)} className="text-gray-600 block mt-4">Already have an account? Login</button>
                </div>
              </>
            )
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Forgot Password</h1>
              <Formik
                initialValues={{ email: '' }}
                validationSchema={Yup.object({
                  email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert('Password reset link has been sent to your email address.');
                    setSubmitting(false);
                    setShowForgotPassword(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-900">Email</label>
                      <Field
                        name="email"
                        type="email"
                        className="w-full p-2 border rounded"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-600" />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full p-2 bg-gray-300 hover:bg-gray-400 focus:border-[#E7D37F] focus:ring-[#E7D37F] border border-transparent rounded"
                    >
                      Send Reset Link
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="mt-4 text-center">
                <button onClick={() => setShowForgotPassword(false)} className="text-gray-600 block mt-4">Back to Login</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
