import React from "react";
import { useGlobalContext } from "../context";
import FeatureRoom from "./FeatureRoom";
import Loading from "./Loading";

export default function RoomLists() {
  const { isLoading, sortedRooms } = useGlobalContext();

  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h5>
          Unfortunately no rooms found according to your search parameters!
        </h5>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {isLoading ? (
          <Loading />
        ) : (
          sortedRooms.map((room, index) => {
            return <FeatureRoom key={index} room={room} />;
          })
        )}
      </div>
    </section>
  );
}
