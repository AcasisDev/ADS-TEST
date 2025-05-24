import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import Links from './pages/Links';
import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/links" element={<Links />} />
        <Route
          path="/*"
          element={
            <div className="font-sans antialiased">
              <Navbar isScrolled={isScrolled} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Services />
                      <OrderForm />
                      <Contact />
                      <Location />
                      <Testimonials />
                    </>
                  }
                />
                <Route path="/shop" element={<Shop />} />
              </Routes>
              <Footer />
              <ScrollToTop isVisible={isScrolled} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;