import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container text-center py-5">
      <Helmet>
        <title>Thank You | Bright Cleaning Services</title>
      </Helmet>

      <h2 className="mb-3">Thank You!</h2>
      <p className="text-muted">
        We’ve received your message and will get back to you within 24 hours.
      </p>

      <div className="mt-4 d-flex justify-content-center flex-wrap gap-3">
        <Link to="/booking" className="btn btn-primary">
          Book Another Cleaning
        </Link>
        <Link to="/blog" className="btn btn-outline-primary">
          Read Our Cleaning Tips
        </Link>
      </div>

      {/* Google Review Call-to-Action */}
      <div className="bg-light p-4 rounded shadow mt-5 mx-auto" style={{ maxWidth: "500px" }}>
        <p className="mb-3">Prefer leaving your review on Google?</p>
        <a
          href="https://www.google.com/search?q=Services+de+Nettoyage+Bright+S.E.N.C.+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2"
        >
          <i className="bi bi-google text-danger fs-5"></i>
          Leave a Google Review
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
