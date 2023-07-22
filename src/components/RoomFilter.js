import React from "react";
import { useGlobalContext } from "../context";
import Title from "./Title";

const uniqueTypes = (rooms, type) => {
  return [...new Set(rooms.map((item) => item[type]))];
};
export default function RoomFilter() {
  const {
    handleChange,
    rooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = useGlobalContext();

  // unique select types
  const value = uniqueTypes(rooms, "type");
  const uniqueValue = ["all", ...value];
  const option = uniqueValue.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  // unique capacity
  const capacityValue = uniqueTypes(rooms, "capacity");
  const guest = capacityValue.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <div className="filter-container">
      <Title title={"search room"} />
      <form className="filter-form">
        {/* item select starts */}
        <div className="form-group">
          <label htmlFor="type">rooms type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {option}
          </select>
        </div>
        {/* item select ends */}

        {/* capacity starts */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {guest}
          </select>
        </div>
        {/* capacity ends */}
        {/* price starts */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* price ends */}
        {/* size starts */}
        <div className="form-group">
          <label htmlFor="price">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              min={minSize}
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              max={maxSize}
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* size ends */}
        {/* price starts */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* price ends */}
      </form>
    </div>
  );
}
