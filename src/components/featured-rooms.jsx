import { useContext } from "react";
import { RoomContext } from "../contexts/room-context";
import Loading from "./loading";
import Title from "./title";
import Room from "./room";

const FeaturedRooms = () => {
  const { featuredRooms, loading } = useContext(RoomContext);
  console.log(loading);
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {featuredRooms.map((room) =>
          loading ? <Loading /> : <Room key={room.id} room={room} />
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
