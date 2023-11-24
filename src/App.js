import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ShopPage from "./pages/ShopPage";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ProductPage from "./components/Product/ProductPage";
import ProductsPage from "./components/Products/ProductsPage";
import productDetails from "./components/ProductDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/:productID"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cartItems} setCart={setCartItems} />}
        />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
};

export default App;
