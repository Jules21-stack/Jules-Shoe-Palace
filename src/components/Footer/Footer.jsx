import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col">
        <img className="logo" src="logo.jpg" alt="Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address</strong>: 390 Kenyatta Road, Street 34, Juja
        </p>
        <p>
          <strong>Phone</strong>: 07 20 000 200
        </p>
        <p>
          <strong>Opening hours</strong>: 8am to 5pm
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="Icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store to Google Play Store</p>
        <div className="row">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <p>Secure payment by:</p>
        <img src="" alt="" />
      </div>

      <div className="Copyright">
        <p>@ 2023, Julesgitonga@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
