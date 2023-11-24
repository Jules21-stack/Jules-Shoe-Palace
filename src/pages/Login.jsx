import React, { useState, useEffect } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { Link, Navigate } from "react-router-dom";
import "../components/Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailPasswordSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailPasswordSignIn();
  };

  if (user) {
    // If user is logged in, redirect to home or another page
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="/">Forget Password</a>
        </div>
        <button type="submit">Log in</button>

        <div className="social-login">
          <button
            className="google-button"
            id="google"
            onClick={() => handleSignIn(googleProvider)}
          >
            <FcGoogle>Sign In with Google</FcGoogle>
          </button>
          <button
            className="facebook-button"
            id="facebook"
            onClick={() => handleSignIn(facebookProvider)}
          >
            <FaFacebookSquare>Sign In With Facebook</FaFacebookSquare>
          </button>
        </div>

        <div className="register">
          <p>
            Don't have an account <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
