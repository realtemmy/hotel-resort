import { Fragment } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Hero from "../components/hero";
import RoomContainer from "../components/room-container";

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </Fragment>
  );
};

export default Rooms;
