import Title from "./title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { useState } from "react";

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugit?",
    },
    {
      icon: <FaHiking />,
      title: "endless biking",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugit?",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugit?",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, fugit?",
    },
  ];
  const [data, setData] = useState(services);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {
            data.map((item, idx) => ( <article className="service" key={idx}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article> ))
        }
      </div>
    </section>
  );
};

export default Services;
