import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

const Home = () => {
  return (
    <Fragment>
      <Hero hero='defaultHero'>
        <Banner title='Luxurious Rooms' subtitle='deluxe rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </Fragment>
  );
};

export default Home;
