import { useContext } from "react";
import { RoomContext } from "../contexts/room-context";
import Room from "./room";

const RoomList = () => {
  const { sortedRooms } = useContext(RoomContext);

  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately, no room matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
        <div className="roomslist-center">
            {
                sortedRooms.map(item => <Room key={item.id} room={item} />)
            }
        </div>
    </section>
  );
};

export default RoomList;
