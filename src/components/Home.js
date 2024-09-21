import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  const name = localStorage.getItem("cust_name");
  return (
    <>
      <Navbar />
      <div>
        <header class="hero">
          <div class="hero-content">
            <h1>Welcome to Our Restaurant--{name}!! </h1>
            <p>Discover the finest cuisines and flavors</p>
            <a href="#contact" class="btn contact">
              Contact Us
            </a>
          </div>
        </header>

        <section id="testimonials" class="testimonials-section">
          <div class="container">
            <h2>Customer Testimonials</h2>
            <div class="testimonial">
              <p>
                "Great food and excellent service! Will definitely visit again."
              </p>
              <div class="accolades">
                <span>- Skanda</span>
              </div>
            </div>
            <div class="testimonial">
              <p>"Amazing experience. Highly recommended!"</p>
              <div class="accolades">
                <span>- Chandrshekar</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact-section">
          <div class="container">
            <p>For reservations or inquiries, contact us:</p>
            <p>Email: info@restaurant.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>&copy; 2023 Your Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
