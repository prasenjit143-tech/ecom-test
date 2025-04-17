import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Product from './Pages/Product';
import Testimonial from './Pages/Testimonials';
import Cart from './Pages/Cart';
import Chekout from './Pages/Checkout';

import Login from './Component/Auth/Login';
import Register from './Component/Auth/Register';
import Forget_pass from './Component/Auth/Forget-pass';
import Profile from './Component/Dashboard/Profile';

import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Utils/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={
              <PrivateRoute>
                <Chekout />
              </PrivateRoute>
            } />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forget_pass />} />

            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
