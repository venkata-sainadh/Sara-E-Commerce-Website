import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner1.jpg" alt="Banner 1" />
        <Carousel.Caption>
          <h3>PASSION</h3>
          <p>Stand Out in the Varsity League of Fashion</p>
          <button className="btn btn-primary">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/banner2.jpg" alt="Banner 2" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
