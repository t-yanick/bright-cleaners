import React from 'react';
import { Helmet } from 'react-helmet';

const Booking = () => {
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Book a Cleaning | Bright Cleaning Services</title>
        <meta name="description" content="Easily book a professional cleaning service online with Bright Cleaning Services. Secure payments and flexible scheduling available." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Schedule Your Cleaning</h2>
        <p className="text-center text-muted mb-5">
          Ready for a sparkling clean home or office? Book your cleaning session in just a few clicks!
        </p>

        {/* Embedded MMIO Form */}
        <div className="mb-5">
          <iframe
            src="https://modernmaid.io/iframes/quotation-form/dd8aa21bf5a31dc5f6bfefa426d767ea"
            width="100%"
            height="2500"
            style={{ border: 0 }}
            title="Bright Cleaning Services Booking Form"
          ></iframe>
        </div>

        {/* How It Works Section */}
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-calendar-check fs-1 text-primary mb-3"></i>
              <h5>Pick Your Date</h5>
              <p className="text-muted">Choose a time that works best for you. We offer flexible scheduling 7 days a week.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-bucket fs-1 text-primary mb-3"></i>
              <h5>We Clean</h5>
              <p className="text-muted">Our professional cleaners will arrive on time and work their magic!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-emoji-smile fs-1 text-primary mb-3"></i>
              <h5>Enjoy Your Space</h5>
              <p className="text-muted">Relax and enjoy your freshly cleaned home or office — satisfaction guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
