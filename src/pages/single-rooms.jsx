import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import defaultBcg from '../images/room-1.jpeg'
import { RoomContext } from "../contexts/room-context";
import Hero from "../components/hero";
import Banner from "../components/banner";

const SingleRooms = () =>{
    const { slug } = useParams();
    const { rooms } = useContext(RoomContext)

    const getRoom = (slug, rooms) =>{
        const room = rooms.find(room => room.slug === slug);
        return room
    }
    const room = getRoom(slug, rooms)

    if(!room){
        return <div className="error">
            <h3>no such room could be found</h3>
            <Link to='/rooms' className="btn-primary">back to rooms</Link>
        </div>
    }
    const { name, description, capacity, size, price, extras,breakfast, pets, images } = room;
    return (
        <Hero hero="roomsHero">
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </Banner>
        </Hero>
    )
}

export default SingleRooms;