import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import "./Navbar.css"; // Import your Navbar styles
import { auth } from "../../firebase"; // Adjust the import path based on your file structure
import { signOut, onAuthStateChanged } from "firebase/auth";
import { IoCartSharp } from "react-icons/io5";
import logo from "../../Images/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div id="header">
      <Link to="/">
        <img
          src={logo}
          className="logo"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={location.pathname === "/shop" ? "active" : ""}
              onClick={() => handleLinkClick("/shop")}
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "active" : ""}
              onClick={() => handleLinkClick("/blog")}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => handleLinkClick("/about")}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={location.pathname === "/login" ? "active" : ""}
              onClick={() => handleLinkClick("/cart")}
            >
              <IoCartSharp />
              CART
            </Link>
          </li>
        </ul>
        <div>
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt={user.displayName}
                style={{ width: 30, height: 30, borderRadius: "50%" }}
              />
              <span>{user.displayName}</span>
              <button onClick={handleSignOut}>Logout</button>
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
