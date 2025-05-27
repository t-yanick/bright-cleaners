import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="bg-light py-5">
      <Helmet>
        <title>Our Services | Bright Cleaning Services</title>
        <meta
          name="description"
          content="Explore our cleaning services including residential, commercial, move-in/out, deep cleaning, and post-construction cleaning. Serving Montreal with precision and care."
        />
      </Helmet>

      <div className="container">
        <h2 className="text-center mb-4">Our Cleaning Services</h2>
        <p className="text-center text-muted mb-5">
          We offer professional cleaning tailored to your needs—because every space deserves to shine.
        </p>

        <div className="row g-4">
          {[
            {
              icon: 'bi-house-door',
              title: 'Residential Cleaning',
              text: 'Routine and deep house cleaning that keeps your home fresh, healthy, and spotless.',
              image: '/images/service-home.jpg'
            },
            {
              icon: 'bi-building',
              title: 'Commercial Cleaning',
              text: 'Office and business space cleaning with a focus on hygiene and professionalism.',
              image: '/images/service-office.jpg'
            },
            {
              icon: 'bi-box-arrow-in-right',
              title: 'Move-In/Out Cleaning',
              text: 'Make your moving experience stress-free with a spotless finish.',
              image: '/images/service-move.jpg'
            },
            {
              icon: 'bi-stars',
              title: 'Deep Cleaning',
              text: 'Top-to-bottom cleaning service for when your space needs extra attention.',
              image: '/images/service-deep.jpg'
            },
            {
              icon: 'bi-tools',
              title: 'Post-Construction Cleaning',
              text: 'After renovation or construction, we clean dust, debris, and residues to leave your space ready to use.',
              image: '/images/service-move.jpg'
            }
          ].map((service, i) => (
            <div className="col-md-6 col-lg-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card h-100 border-0 shadow-sm text-center">
                {service.image && (
                  <img
                    src={`${process.env.PUBLIC_URL}${service.image}`}
                    alt={service.title}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <i className={`bi ${service.icon} fs-2 text-primary mb-2`}></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <h4 className="mb-3">Ready to get started?</h4>
          <Link to="/booking" className="btn btn-primary btn-lg">
            Book a Service Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

