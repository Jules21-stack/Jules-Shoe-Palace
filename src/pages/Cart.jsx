import React from "react";
import "../components/Cart.css";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const changeQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.productPrice,
      0
    );
  };

  const checkout = () => {
    setCart([]); // Clear the cart
    alert("Purchase successful! Thank you for shopping with us!");
  };

  return (
    <div className="cart-container">
      <div className="cart-products">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.productImage} />
              {item.productName} - Ksh{item.productPrice} - Quantity:{" "}
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  changeQuantity(item.id, parseInt(e.target.value, 10))
                }
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-summary">
        <p>Total Products: {getTotalProducts()}</p>
        <p>Total Price: Ksh{getTotalPrice().toFixed(2)}</p>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
