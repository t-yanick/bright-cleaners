import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Bright Cleaners - Montreal’s Trusted Cleaning Service</title>
        <meta name="description" content="Exceptional cleaning services in Montreal. Book now with Bright Cleaners for residential and commercial spaces." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-light text-center py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="display-4 fw-bold">Shining Spaces, Spotless Results</h1>
          <p className="lead">Professional Residential & Commercial Cleaning Services in Montreal</p>
          <a href="/booking" className="btn btn-primary btn-lg mt-3">Get a Free Quote</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 text-center bg-white">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">Why Choose Bright Cleaners?</h2>
          <div className="row">
            {[
              ["bi-stars", "Experienced Professionals", "Our trained team ensures meticulous cleaning every time."],
              ["bi-leaf", "Eco-Friendly Products", "We use environmentally safe products for a healthier space."],
              ["bi-clock-history", "Flexible Scheduling", "Cleaning plans tailored to your convenience."],
              ["bi-shield-check", "Satisfaction Guaranteed", "100% satisfaction guarantee with every clean."]
            ].map(([icon, title, desc], i) => (
              <div className="col-md-3" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="card border-0 shadow-sm mb-4 h-100">
                  <div className="card-body">
                    <i className={`bi ${icon} fs-1 text-primary`}></i>
                    <h5 className="card-title mt-3">{title}</h5>
                    <p className="card-text">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">Our Services</h2>
          <div className="row">
            {[
              ["Residential Cleaning", "Regular and deep cleaning for your home."],
              ["Commercial Cleaning", "Customized cleaning solutions for businesses."],
              ["Move-In/Out Cleaning", "Thorough cleaning to make moving hassle-free."],
              ["Specialized Services", "Carpet cleaning, window washing, and more."]
            ].map(([title, desc], i) => (
              <div className="col-md-3" key={i} data-aos="flip-left" data-aos-delay={i * 100}>
                <div className="card border-0 shadow-sm mb-4 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">What Our Clients Say</h2>
          <div className="row justify-content-center">
            {[
              ["Alex R., Montreal", "Bright Cleaners transformed our office space. Professional and efficient!"],
              ["Sophie L., Laval", "Reliable and thorough. Highly recommend their home cleaning services."]
            ].map(([name, feedback], i) => (
              <div className="col-md-5 mb-4" key={i} data-aos="fade-right" data-aos-delay={i * 200}>
                <div className="blockquote p-4 border-start border-primary bg-light">
                  <p className="mb-2 fst-italic">"{feedback}"</p>
                  <footer className="blockquote-footer mt-2">{name}</footer>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary text-white py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-3">Ready for a Cleaner Space?</h2>
          <a href="/booking" className="btn btn-light btn-lg">Book Your Cleaning Today</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
