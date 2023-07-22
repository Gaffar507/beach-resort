import React from "react";
import loadingImg from "../images/gif/loading-arrow.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h5>Data is loading...</h5>
      <img src={loadingImg} alt="" />
    </div>
  );
}
