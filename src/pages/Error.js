import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Fragment>
      <Hero hero="defaultHero">
        <Banner title="404" subtitle="Page Not Found...">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
    </Fragment>
  );
};

export default PageNotFound;
