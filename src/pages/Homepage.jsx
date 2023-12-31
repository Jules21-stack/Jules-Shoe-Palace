import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import your CSS file
import ProductsPage from "../components/Products/ProductsPage";
import ProductPage from "../components/Product/ProductPage";
import productDetails from "../components/ProductDetails";

function HomePage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // You can use the firestore configuration here to fetch products
    // For now, we'll use the locally stored product details
    setProducts(productDetails);
  }, []);

  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  // Function to handle the button click event and navigate programmatically
  const handleButtonClick = () => {
    // Replace '/shop' with the desired route
    navigate("/shop");
  };

  return (
    <div>
      <section id="hero">
        <h2>JULES SHOE PALACE.</h2>
        <h1>Best custom-made footwear</h1>
        <h4>super value deals</h4>
        <p>Your one-stop shop for stylish and comfortable shoes</p>
        <button onClick={handleButtonClick}>Shop Now</button>
      </section>
      <h4>
        Shoes ranging from High Stiletto heels, to sport shoes, to elegant
        boots.
        <br />
        Every Shoe with is unique style
      </h4>
      <ProductsPage products={products} onProductClick={handleProductClick} />
      {selectedProduct && <ProductPage product={selectedProduct} />}
      <button onClick={handleButtonClick}>Shop Now</button>
    </div>
  );
}

export default HomePage;
