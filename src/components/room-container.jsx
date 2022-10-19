import { useContext } from "react";
import RoomFilter from "./room-filter";
import RoomList from "./room-list";
import Loading from "./loading";
import { RoomContext } from "../contexts/room-context";

const RoomContainer = () => {
  const { loading } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      this is sthe room container
      <RoomFilter />
      <RoomList />
    </div>
  );
};

export default RoomContainer;
