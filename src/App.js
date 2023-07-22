import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/:params"
          element={
            <SingleRoom title={"Return Feature Room"} condition={true} />
          }
        ></Route>
        <Route path="/rooms" element={<Room />}></Route>
        <Route
          path="/rooms/:params"
          element={<SingleRoom title={"Return Rooms"} condition={false} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
