import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fclothes-shop-banner&psig=AOvVaw3AnGTX4HB5c86IOkZQQb9C&ust=1734859411631000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC7qZ7FuIoDFQAAAAAdAAAAABAJ" alt="Banner 1" />
        <Carousel.Caption>
          <h3>PASSION</h3>
          <p>Stand Out in the Varsity League of Fashion</p>
          <button className="btn btn-primary">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fclothes-shop-banner&psig=AOvVaw3AnGTX4HB5c86IOkZQQb9C&ust=1734859411631000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOC7qZ7FuIoDFQAAAAAdAAAAABAO" alt="Banner 2" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
