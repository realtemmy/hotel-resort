import { createContext, useEffect, useState } from "react";

import items from "../data";
// console.log(items)

export const RoomContext = createContext({
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
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
  const [price, setPrice] = useState(0)
  const [type, setType] = useState("all");
  const [maxSize, setMaxSize] = useState(0);


  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxSize(maxSize)
  }, []);

  const handleChange = (event) => {
    const { name, type, value } = event.target;
    console.log(name, type, value);
  };

//   console.log(rooms, sortedRooms, featuredRooms, loading);

  const value = { rooms, sortedRooms, featuredRooms, loading, price, maxSize, type,  handleChange };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};
