import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Hero from "../components/hero";

const Rooms = () => {
  return <Hero hero="roomsHero">
    <Banner title="our rooms">
      <Link to="/" className="btn-primary">return home</Link>
    </Banner>
  </Hero>;
};

export default Rooms;
