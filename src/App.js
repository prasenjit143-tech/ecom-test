import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";


import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Testimonial from "./Pages/Testimonials";
import Cart from "./Pages/Cart";
import Chekout from "./Pages/Checkout";
import OrderDetails from "./Pages/OrderDetails";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Forget_pass from "./Component/Auth/Forget-pass";
import ResetPassword from "./Component/Auth/ResetPassword";
import Profile from "./Component/Dashboard/Profile";

import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Utils/PrivateRoute";
<<<<<<< HEAD
import Dashboard from "./Component/Dashboard/Dashboard";
import Wishlist from "./Component/Dashboard/Wishlist";
import Admin_login from "./Admin/Auth/Login";
import Admin_dashboard from "./Admin/Auth/Dashboard";
import Admin_products from "./Admin/Products/Products";
import Admin_users from "./Admin/Users/Users";

import { useEffect } from "react";

// New component to conditionally render header/footer
const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/checkout" element={<Chekout />} />
        <Route path="/order/details" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forget_pass />} />
        <Route path="/admin/login" element={<Admin_login />} />
        <Route path="/admin/dashboard" element={<Admin_dashboard />} />
        <Route path="/admin/products" element={<Admin_products />} />
        <Route path="/admin/users" element={<Admin_users />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
=======
import ProfilePage from "./Pages/Profile";

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
            {/* <Route element={<PrivateRoute />}> */}
            <Route path="/checkout" element={<Chekout />} />
            <Route path="/order/details/:id" element={<OrderDetails />} />
            <Route path="/profile" element={<Profile />} />
            {/* </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<Forget_pass />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
>>>>>>> 5c1905269ee511fcc63c278d69d8f0fc5e86241a
  );
}

export default App;
