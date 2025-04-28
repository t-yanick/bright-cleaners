import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="bg-white py-5">
      <Helmet>
        <title>About Us | Bright Cleaners</title>
        <meta name="description" content="Learn about Bright Cleaners—Montreal’s trusted team delivering professional, eco-conscious cleaning services for homes and businesses." />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Who We Are</h2>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <img
                src="/images/bright-cleaners-team.png"
                alt="Bright Cleaners team at work"
                className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h4>Our Mission</h4>
            <p>
              At Bright Cleaners, we’re on a mission to make your environment healthier, happier, and cleaner. Whether it’s your home or business, we deliver top-tier cleaning with care, precision, and consistency.
            </p>
            <h4>Our Values</h4>
            <ul className="list-unstyled">
              <li>✅ Customer Satisfaction is #1</li>
              <li>✅ Eco-Friendly & Sustainable Practices</li>
              <li>✅ Reliable, Professional, and Friendly Team</li>
            </ul>
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up">
          <h4 className="text-center">What Sets Us Apart?</h4>
          <p className="text-center text-muted mx-auto" style={{ maxWidth: '700px' }}>
            We combine experience, technology, and a people-first approach. From flexible scheduling to transparent pricing and certified cleaning products—we make it easy to keep your space shining without the stress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
