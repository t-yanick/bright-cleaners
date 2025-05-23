import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </HashRouter>
  );
}

export default App;
