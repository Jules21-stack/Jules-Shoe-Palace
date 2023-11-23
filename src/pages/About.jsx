import React from "react";
import "../App.css"; // Import your global styling
import image1 from "../Images/image24.jpg";
import image2 from "../Images/image20.jpg";
import image3 from "../Images/image23.jpg";
import image4 from "../Images/image21.jpg";
import image5 from "../Images/image22.jpg";
import image6 from "../Images/image19.jpg";

const About = () => {
  return (
    <div>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>jules shoe palace </p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="image14.jpg" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Creating stunning images with as much or as little control as you
            like thanks to a choice of basic and creative modes.
          </p>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </marquee>
        </div>
      </section>

      <section id="feature" class="section-p1">
        <div class="fe-box">
          <img src={image1} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
          <img src={image2} alt="" />
          <h6>Online Order</h6>
        </div>
        <div class="fe-box">
          <img src={image3} alt="" />
          <h6>Save Money</h6>
        </div>
        <div class="fe-box">
          <img src={image4} alt="" />
          <h6>Promotions</h6>
        </div>
        <div class="fe-box">
          <img src={image5} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
          <img src={image6} alt="" />
          <h6>F24/7 Support</h6>
        </div>
      </section>

      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sig Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="Your email address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default About;
