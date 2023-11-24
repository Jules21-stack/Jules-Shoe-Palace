import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productDetails from "../ProductDetails";
import { IoMdStar } from "react-icons/io";

const ProductPage = ({ addToCart }) => {
  const navigate = useNavigate();
  const { productID } = useParams();

  const [selectedRating, setSelectedRating] = useState(0);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchedProduct = getProductDetails(productID);

    if (!fetchedProduct) {
      navigate("/");
    } else {
      setProduct(fetchedProduct);
    }
  }, [productID, navigate]);

  const addToCartHandler = () => {
    addToCart(product);
    alert(`${product.productName} added to cart!`);
  };

  if (!product) {
    return null; // or render a loading state
  }

  return (
    <div>
      <h2>{product.productName}</h2>
      <img
        src={product.productImage}
        alt={product.productName}
        style={{ width: 300, height: 300 }}
      />
      <p>ID: {product.id}</p>
      <p>Details: {product.productDetails}</p>
      <div>
        <h3>Rating</h3>
        <div className="star">
          {Array.from(
            { length: selectedRating || product.rating },
            (_, index) => (
              <IoMdStar key={index} />
            )
          )}
        </div>
        <p>{`${product.numberOfRatings} people rated this product`}</p>

        <div>
          <label htmlFor="rating">Rate this product:</label>
          <select
            id="rating"
            onChange={(e) => setSelectedRating(Number(e.target.value))}
            value={selectedRating}
          >
            <option value={0}>Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
          {selectedRating > 0 && (
            <button onClick={addToCartHandler}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

const getProductDetails = (productID) => {
  return productDetails.find((product) => product.id === productID) || null;
};

export default ProductPage;
