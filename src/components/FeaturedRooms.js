import React from "react";
import { useGlobalContext } from "../context";
import FeatureRoom from "./FeatureRoom";
import Loading from "./Loading";
import Title from "./Title";

export default function FeaturedRooms({ home }) {
  const { featuredRooms, isLoading } = useGlobalContext();
  return (
    <>
      <section className="featured-rooms">
        <Title title={"Feature rooms"} />
        <div className="featured-rooms-center">
          {isLoading ? (
            <Loading />
          ) : (
            featuredRooms.map((room, index) => {
              return <FeatureRoom key={index} room={room} home={home} />;
            })
          )}
        </div>
      </section>
    </>
  );
}
