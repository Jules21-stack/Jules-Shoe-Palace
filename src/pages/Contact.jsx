import React from "react";
import "../components/Contact.css";

const Contact = () => {
  return (
    <div>
      <section id="page-header">
        <h2>#Let's Talk.</h2>
        <p>Talk to us, we appreciate customer reviews</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span> GET IN TOUCH</span>
          <h2> visit our shop or contact us today</h2>
          <h3>Head office</h3>
          <div>
            <li>
              <i className="fas fa-map"></i>
              <p>exit 13 kenyatta road, juja</p>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <p>jules@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>0720000035</p>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <p>monday to saturday:8:00am to 5pm</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.049777661496!2d37.003712650000004!3d-1.1246102500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f46f93de09f77%3A0x6eee653032648d37!2sKenyatta%20Road!5e0!3m2!1sen!2ske!4v1697281297309!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>we love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <p>
              <span>Jules Gitonga</span> sales manager <br />
              Phone 0720000035 <br />
              Email: julesgitonga@gmail.com
            </p>
            <p>
              <span>Christine wahu</span> marketing manager <br />
              Phone 0720000035 <br />
              Email: christine@gmail.com
            </p>
            <p>
              <span>Ivy Wanjiru</span> marketing manager <br />
              Phone 0720000035 <br />
              Email: wanjiru@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section id="Newsletter" className="section-p1 section-m1">
        <div className="newtext">
          <h4>sign up for Newsletter</h4>
          <p>
            Get E-mail updates about our new arrivals and{" "}
            <span>special offer</span> special offers
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email address" />
          <button className="normal">Sign up</button>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
        <script src="./mail.js"></script>
      </section>
    </div>
  );
};

export default Contact;
