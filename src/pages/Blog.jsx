import React from "react";
import "../App.css"; // Import the global styles
import image1 from "../Images/image16.jpg";
import image2 from "../Images/image15.jpg";
import image3 from "../Images/image14.jpg";
import image4 from "../Images/image12.jpg";

const Blog = () => {
  return (
    <div>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        <div class="blog-box">
          <div class="blog-img">
            <img src={image1} alt="" />
          </div>
          <div class="blog-details">
            <h4>six inched stiletto heels</h4>
            <p>
              stiletto heels from 3inches to 11 inches some copreate shoes ...
            </p>
            <a href="#">Read More</a>
          </div>
          <h1>13/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={image2} alt="" />
          </div>
          <div class="blog-details">
            <h4>white smoky sneakers</h4>
            <p>
              in the land of sneakers jules shoe palace brings you white smoky
              sneakers...
            </p>
            <a href="#">Read More</a>
          </div>
          <h1>12/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={image3} alt="" />
          </div>
          <div class="blog-details">
            <h4>Runaway-Inspired ceo stiletto</h4>
            <p>
              stiletto heels from 3inches to 11 inches some copreate shoes ...
            </p>
            <a href="#">Read More</a>
          </div>
          <h1>16/01</h1>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src={image4} alt="" />
          </div>
          <div class="blog-details">
            <h4>AW20 Menswear Trends</h4>
            <p>
              in the land of sneakers jules shoe palace brings you all
              heart-desiring sneakers...
            </p>
            <a href="#">Read More</a>
          </div>
          <h1>10/03</h1>
        </div>
      </section>

      <section id="pagination" class="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <i class="fas fa-long-arrow-alt-right"></i>
      </section>

      <section id="Newsletter" class="section-p1 section-m1">
        <div class="newtext">
          <h4>sign up for Newsletter</h4>
          <p>
            Get E-mail updates about our new arrivals and{" "}
            <span>special offer</span> special offers
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="Your Email address" />
          <button class="normal">sign up</button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
