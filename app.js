import React from 'react';
import Navbar from './components/Navbar';
import HomeCarousel from './components/Carousel';
import Products from './components/Products';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
