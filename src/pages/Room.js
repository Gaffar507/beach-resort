import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomContainer from "../components/RoomContainer";
import backImg from "../images/room-3.jpeg";

export default function Room() {
  return (
    <>
      <Hero background={backImg} height={"60vh"}>
        <Banner title="our rooms" subtitle={`let's explore all rooms`}>
          <Link to={"/"} className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
