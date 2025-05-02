import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ThankYou = () => (
  <div className="container text-center py-5">
    <Helmet>
      <title>Thank You | Bright Cleaning Services</title>
    </Helmet>
    <h2 className="mb-3">Thank You!</h2>
    <p>Your message has been received. We’ll get back to you as soon as possible.</p>
    <Link to="/" className="btn btn-primary mt-3">Return to Home</Link>
  </div>
);

export default ThankYou;
