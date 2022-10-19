import { useContext } from "react";
import { RoomContext } from "../contexts/room-context";
import Title from "./title";

const getUnique = (items, value) =>{
    return [...new Set(items.map(item => item[value])) ]
}

const RoomFilter = () => {
  const {
    rooms,
    handleChange,
    type,
    capacity,
    breakfast,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
  } = useContext(RoomContext);

  let roomTypes = getUnique(rooms, 'type');
  roomTypes = ['all', ...roomTypes]

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {roomTypes.map((type, idx) => (
              <option value={type} key={idx}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
