import React from "react";
import { Link } from "react-router-dom";
import productDetails from "../ProductDetails";
import "../Shop.css";
import { IoCartSharp } from "react-icons/io5";

const ProductsPage = ({ onProductClick }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="pro-container">
        {productDetails.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            onClick={() => onProductClick(product)}
          >
            <div className="pro">
              <img
                src={product.productImage}
                alt={product.productName}
                style={{ width: 200, height: 200 }}
              />

              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.productName}</h5>
                <h7>{product.productDetails}</h7>
                <div className="star">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))}
                </div>
                <h4>{`KSh ${product.productPrice}`}</h4>
              </div>
              <IoCartSharp />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
