import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { useGlobalContext } from "../context";
import Error from "./Error";
export default function SingleRoom({ title, condition }) {
  const { params } = useParams();
  const { getRoom } = useGlobalContext();
  const [room, setRoom] = useState();

  useEffect(() => {
    const room = getRoom(params);
    setRoom({
      ...room,
    });
  }, [getRoom || params || room]);

  if (!room) {
    return (
      <div className="error">
        <h3>No search room could be found!</h3>
        <Link to={"/rooms"} className="btn-primary">
          Back to room
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    price,
    size,
    extras,
    capacity,
    images,
    breakfast,
    pets,
  } = room;
  if (!images) {
    return (
      <>
        <Error />
      </>
    );
  }
  const [mainImg, ...defaultImg] = images;

  return (
    <div>
      <Hero background={mainImg} height={"60vh"}>
        <Banner title={`${name} room`}>
          <Link to={condition ? "/" : "/rooms"} className="btn-primary">
            {title}
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((image, index) => {
            return <img key={index} src={image} alt="" />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <section className="info">
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size}-SQFT</h6>
            <h6>
              Max Capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </section>
        </div>
        <section className="room-extras">
          <h6>extras</h6>
          <ul>
            {extras.map((item, index) => {
              return (
                <li key={index} className="extras">
                  - {item}
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </div>
  );
}
