import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function FeatureRoom({ room, home }) {
  const { images, name, price, slug } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="feature image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per night</p>
        </div>
        <Link
          to={home ? `/${slug}` : `/rooms/${slug}`}
          className="room-link btn-primary"
        >
          Feature
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

FeatureRoom.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
