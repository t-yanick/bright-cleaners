import React from 'react';
import { Helmet } from 'react-helmet';

const Testimonials = () => {
  return (
    <div className="bg-white py-5">
      <Helmet>
        <title>Client Testimonials | Bright Cleaning Services</title>
        <meta name="description" content="See what our satisfied clients say about Bright Cleaners. Real reviews from happy homes and polished offices in Montreal." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>

        <div className="row justify-content-center">
          {[
            {
              name: "Alex R.",
              city: "Montreal",
              text: "Bright Cleaners transformed our office. Super professional, great attention to detail, and always on time."
            },
            {
              name: "Sophie L.",
              city: "Laval",
              text: "Their team was amazing. My house has never looked better after their deep clean—definitely a returning customer!"
            },
            {
              name: "Mark P.",
              city: "Westmount",
              text: "Booked a move-out clean and wow... I got my entire deposit back. The place was spotless!"
            },
            {
              name: "Elena T.",
              city: "Longueuil",
              text: "They made my weekly cleaning feel luxurious. It’s like a reset for my home every time they visit!"
            }
          ].map((review, i) => (
            <div className="col-md-6 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="p-4 shadow-sm bg-light rounded d-flex align-items-start h-100">
                <img
                  src={`${process.env.PUBLIC_URL}/images/reviewer-${i + 1}.jpg`}
                  alt={`${review.name}`}
                  className="rounded-circle me-3"
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
                <div>
                  <p className="fst-italic mb-2">"{review.text}"</p>
                  <footer className="text-muted small">— <strong>{review.name}</strong>, {review.city}</footer>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h5>Experience the Bright Cleaning Services difference.</h5>
          <a href="/booking" className="btn btn-primary mt-3">Book Now</a>
        </div>

        {/* Combined Review Section */}
        <div className="mt-5 pt-5 border-top" data-aos="fade-up">
          <h4 className="text-center mb-5">Leave Us a Review</h4>
          <div className="row justify-content-center">
            {/* Form Column */}
            <div className="col-md-6 mb-4">
              <form
                action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                method="POST"
                className="bg-light p-4 rounded shadow"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email (optional)</label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Review</label>
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </div>
              </form>
            </div>

            {/* Google Review Column */}
            <div className="col-md-5 mb-4">
              <div className="bg-light p-4 rounded shadow h-100 d-flex flex-column justify-content-center align-items-center">
                <p className="text-center mb-3">Prefer leaving your review on Google?</p>
                <a
  href="https://www.google.com/search?q=Bright+Cleaners+Montreal+reviews"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-secondary d-flex align-items-center gap-2"
>
  <i className="bi bi-google text-danger fs-5"></i>
  Leave a Google Review
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
