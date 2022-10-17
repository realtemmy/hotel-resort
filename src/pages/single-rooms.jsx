import { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../contexts/room-context";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { StyledHero } from "../components/styledHero";

const SingleRooms = () => {
  const { slug } = useParams();
  const { rooms } = useContext(RoomContext);

  const getRoom = (slug, rooms) => {
    const room = rooms.find((room) => room.slug === slug);
    return room;
  };
  const room = getRoom(slug, rooms);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...remainingImg] = images;
  return (
    <Fragment>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {remainingImg.map((image, idx) => (
            <img src={image} alt={name} key={idx} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              max-capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <ul className="extras">
          {extras.map((item, idx) => (
            <li className="extras" key={idx}>
              - {item}
            </li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default SingleRooms;
