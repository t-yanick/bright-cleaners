import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Contact Us | Bright Cleaning Services</title>
        <meta name="description" content="Have a question or want to schedule a cleaning? Contact Bright Cleaners today." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center text-muted mb-5">We're happy to answer your questions and help you book a cleaning that fits your needs.</p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              className="bg-white p-4 shadow rounded"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>

            <div className="mt-5 text-center">
              <p><strong>Email:</strong> info@brightcleaningservices.ca</p>
              <p><strong>Phone:</strong> +1 450 518 2494</p>
              <p><strong>Address:</strong> 4045 Boulevard Saint-Jean, Dollard-des-Ormeaux, H9G 1X3</p>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-4">
              <iframe
                title="Bright Cleaning Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.397853233797!2d-73.83204228446477!3d45.48901573962027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d7cc7a2a0db%3A0x9266e68cb2a96a0a!2s4045%20Boulevard%20Saint-Jean%2C%20Dollard-des-Ormeaux%2C%20QC%20H9G%201X3%2C%20Canada!5e0!3m2!1sen!2sca!4v1714173212264!5m2!1sen!2sca"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
