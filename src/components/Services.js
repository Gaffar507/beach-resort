import React from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "../components/Title";

export default function Services() {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Free cocktails",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt.",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt.",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sunt.",
    },
  ];
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
