import React from "react";
import backImg from "../images/defaultBcg.jpeg";

export default function Hero({ children, background, height }) {
  const sectionStyle = {
    background: `url(${background})`,
    height: `${height}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "fill",
    backgroundRepeat: "round",
  };

  return <header style={sectionStyle}>{children}</header>;
}

Hero.defaultProps = {
  background: backImg,
};
