import React, { useEffect } from 'react';
import useScrollSpeed from './assets/js/useScrollSpeed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brands from './components/Brands';
import Header from './components/Header';
import Nav from './components/Navbar';
import Achive from './components/Achive';
import Services from './components/Services';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useScrollSpeed(10);

  return (
    <>
      <div>
        <Nav />
        <Header />
        <div data-aos="fade-up">
          <Brands />
        </div>
        <div data-aos="fade-left">
          <Services />
        </div>
        <div data-aos="fade-right">
          <Achive />
        </div>
      </div>
    </>
  );
}

export default App;
