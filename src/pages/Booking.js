import React from 'react';
import { Helmet } from 'react-helmet';

const Booking = () => {
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Book a Cleaning | Bright Cleaning Services</title>
        <meta
          name="description"
          content="Easily book a cleaning appointment online through our secure Square booking system."
        />
      </Helmet>

      <div className="container text-center">
        <h2 className="mb-4">Book an Appointment</h2>
        <p className="text-muted mb-4">Choose your service, date, and time. Fast and easy booking!</p>

        <a
          href="https://app.squareup.com/appointments/book/mx5y0typl5fa4a/L4J9D8CW0ECV9/start"
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{
            backgroundColor: '#006aff',
            border: 'none',
            color: 'white',
            height: '40px',
            textTransform: 'uppercase',
            fontFamily: "'Square Market', sans-serif",
            letterSpacing: '1px',
            lineHeight: '38px',
            padding: '0 28px',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          Book now
        </a>
      </div>

      {/* How It Works Section */}
      <div className="container mt-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-calendar-check fs-1 text-primary mb-3"></i>
              <h5>Pick Your Date</h5>
              <p className="text-muted">
                Choose a time that works best for you. We offer flexible scheduling 7 days a week.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-bucket fs-1 text-primary mb-3"></i>
              <h5>We Clean</h5>
              <p className="text-muted">
                Our professional cleaners will arrive on time and work their magic!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded h-100">
              <i className="bi bi-emoji-smile fs-1 text-primary mb-3"></i>
              <h5>Enjoy Your Space</h5>
              <p className="text-muted">
                Relax and enjoy your freshly cleaned home or office — satisfaction guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
