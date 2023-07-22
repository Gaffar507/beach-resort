import React, { memo, useContext, useEffect, useState } from "react";
import data from "./data";

const RoomContext = React.createContext();

const RoomProvider = memo(({ children }) => {
  const [roomState, setRoomState] = useState({
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    isLoading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false,
  });

  useEffect(() => {
    const rooms = formatRooms(data);
    const featuredRooms = rooms.filter((item) => item.featured === true);
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));

    setRoomState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      isLoading: false,
      maxPrice,
      maxSize,
    });
  }, [data]);

  function formatRooms(rooms) {
    const tempRooms = rooms.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((item) => {
        return item.fields.file.url;
      });
      return {
        ...item.fields,
        images,
        id,
      };
    });
    return tempRooms;
  }

  const getRoom = (slug) => {
    const singleRoom = roomState.rooms.find((room) => room.slug === slug);
    return singleRoom;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type == "checkbox" ? target.checked : target.value;
    const name = target.name;
    setRoomState({ ...roomState, [name]: value });
  };

  useEffect(() => {
    filterChange();
  }, [roomState]);

  const filterChange = () => {
    let {
      rooms,
      sortedRooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      pets,
      breakfast,
    } = roomState;

    // convert string into  number
    capacity = parseInt(capacity);
    price = parseInt(price);
    maxSize = parseInt(maxSize);
    minSize = parseInt(minSize);
    // search by type
    let tempRooms = [...rooms];
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // search by capacity
    if (capacity !== 1) {
      tempRooms = rooms.filter((item) => item.capacity >= capacity);
    }
    // search by price
    if (price) {
      tempRooms = rooms.filter((item) => item.price <= price);
    }
    // search by size
    // tempRooms=rooms.filter((item)=>item.size>=minSize&& item.size<=maxSize)
    // search by breakfast and pets
    if (breakfast) {
      tempRooms = rooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = rooms.filter((room) => room.pets === true);
    }
    console.log(tempRooms);
    // all passing filtering data
    tempRooms.length === 0
      ? setRoomState((pre) => {
          return { ...pre, sortedRooms: rooms };
        })
      : setRoomState((pre) => {
          return { ...pre, sortedRooms: tempRooms };
        });
  };

  return (
    <RoomContext.Provider value={{ ...roomState, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
});

export { RoomProvider };
export const useGlobalContext = () => {
  return useContext(RoomContext);
};
