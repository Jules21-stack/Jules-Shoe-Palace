// ShopPage.jsx
import React, { useState, useEffect } from "react";
import ProductsPage from "../components/Products/ProductsPage";
import ProductPage from "../components/Product/ProductPage";
import productDetails from "../components/ProductDetails"; // Importing product details
import { db } from "../firebase";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import Cart from "./Cart";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductsAdded, setProductsAdded] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // You can use the firestore configuration here to fetch products
    // For now, we'll use the locally stored product details
    setProducts(productDetails);
  }, []);

  const handleProductClick = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const handleAddProductsToFirestore = async () => {
    // Check if products are already added to Firestore
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Products are already added, set flag and return
      setProductsAdded(true);
      return;
    }

    // Products not added, add them to Firestore
    const productsCollectionRef = collection(db, "products");

    for (const product of products) {
      await addDoc(productsCollectionRef, product);
    }

    // Set the flag to indicate that products are added
    setProductsAdded(true);
  };

  const addToCart = (product) => {
    // Assuming each product has a unique id
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>JULES SHOE PALACE</h1>
      {/* Other header and navigation elements here */}

      <section id="page-header">
        <h2>#JULES SHOE PALACE.</h2>
        <p>Save more with JULES SHOE PALACE</p>
      </section>

      {/* Add button to trigger adding products to Firestore */}
      {!isProductsAdded && (
        <button onClick={handleAddProductsToFirestore}>
          Add Products to Firestore
        </button>
      )}

      {/* Include ProductsPage and ProductPage components */}
      <ProductsPage products={products} onProductClick={handleProductClick} />
      {selectedProduct && (
        <ProductPage product={selectedProduct} addToCart={addToCart} />
      )}
    </div>
  );
};

export default ShopPage;
