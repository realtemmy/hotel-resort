import Hero from "../components/hero";
import Banner from "../components/banner";
import Services from "../components/services";
import FeaturedRooms from "../components/featured-rooms";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </Fragment>
  );
};

export default Home;
