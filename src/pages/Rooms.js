import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/containers/RoomsContainer";

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </Fragment>
  );
};

export default Rooms;
