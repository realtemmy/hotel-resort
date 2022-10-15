import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe roooms starting at $299">
                <Link to="/rooms" className="btn-primary">our rooms</Link>
            </Banner>
        </Hero>
    );
}

export default Home;