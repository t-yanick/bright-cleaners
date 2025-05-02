import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Bright Cleaning Services</h5>
            <p>Montreal's trusted cleaning service. Sparkling homes and pristine offices, professionally cleaned every time.</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <form
              action="https://formspree.io/f/mblogdae"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: {
                    Accept: "application/json",
                  },
                }).then(() => {
                  window.location.replace("/thank-you");
                });
              }}
            >
              <div className="mb-2">
                <input type="text" name="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-2">
                <input type="email" name="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-2">
                <textarea name="message" className="form-control" rows="3" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">Send Message</button>
            </form>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
        <div className="text-center mt-4">
          <small>&copy; {new Date().getFullYear()} Bright Cleaning Services. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
