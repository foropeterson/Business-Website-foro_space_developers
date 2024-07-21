import React, { useEffect } from 'react';
import useScrollSpeed from './assets/js/useScrollSpeed';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brands from './components/Brands';
import Header from './components/Header';
import Nav from './components/Navbar';
import Achive from './components/Achive';
import Services from './components/Services';
import WithLoading from './components/Loading/WithLoading'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useScrollSpeed(10);

  return (
    <WithLoading>
      <div>
        <Nav />
        <div data-aos="fade-up" data-aos-duration="4000">
          <Header />
        </div>
        <div data-aos="fade-down-left">
          <Brands />
        </div>
        <div data-aos="fade-left">
          <Services />
        </div>
        <div data-aos="fade-down-right">
          <Achive />
        </div>
      </div>
    </WithLoading>
  );
}

export default App;
