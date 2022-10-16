import { createContext, useEffect, useState } from "react";

import items from "../data";
// console.log(items)

export const RoomContext = createContext({
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
});

const formatData = (items) => {
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
  }, []);

//   console.log(rooms, sortedRooms, featuredRooms, loading);

  const value = { rooms, sortedRooms, featuredRooms, loading };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
