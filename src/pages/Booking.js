import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
 const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Book Cleaning Service | Bright Cleaning Services</title>
        <meta name="description" content="Schedule your professional cleaning service with Bright Cleaners today. Quick and easy booking form." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Book a Cleaning Service</h2>
        <p className="text-center text-muted mb-5">Fill out the form below and we’ll get back to you shortly.</p>

        <form className="row g-3 bg-white p-4 shadow rounded">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Jane Doe" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="jane@example.com" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="+1 (514) 123-4567" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="service" className="form-label">Service Type</label>
            <select id="service" className="form-select" required>
              <option defaultValue="">Choose...</option>
              <option>Residential Cleaning</option>
              <option>Commercial Cleaning</option>
              <option>Move-In/Out Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Other</option>
            </select>
          </div>

            <div className="col-12">
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-control"
                    placeholderText="Select a date"
                    minDate={new Date()}
                    id="date"
                    required
                />
            </div>

          <div className="col-12">
            <label htmlFor="notes" className="form-label">Additional Notes</label>
            <textarea className="form-control" id="notes" rows="4" placeholder="Tell us more about your space or needs..."></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary btn-lg mt-3">Submit Booking Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
