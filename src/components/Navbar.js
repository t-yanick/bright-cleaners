import React from 'react';
import { Link } from 'react-router-dom';
/* import { useTranslation } from 'react-i18next';
 */import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
/*   const { t, i18n } = useTranslation();
 */
  // Collapse navbar on link click (mobile view)
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const collapseInstance = window.bootstrap.Collapse.getInstance(navbarCollapse);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    }
  };

 /*  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }; */

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
          <img
            src="/images/bcs-logo.jpeg"
            alt="Bright Cleaning Services logo"
            style={{ height: '40px', width: '40px', objectFit: 'contain', marginRight: '10px' }}
          />
          <span className="fw-bold text-primary">Bright Cleaning Services</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={handleNavLinkClick}>Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={handleNavLinkClick}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-2" to="/booking" onClick={handleNavLinkClick}>
                Book Now
              </Link>
            </li>
            {/* <li className="nav-item ms-3 d-flex">
              <button
                className="btn btn-sm btn-outline-secondary me-1"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => changeLanguage('fr')}
              >
                FR
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
