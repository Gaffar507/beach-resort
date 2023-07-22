import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={logo} alt="beach logo" />
          </Link>
          <button type="button" className="nav-btn">
            {<FaAlignRight className="nav-icon" onClick={handleSubmit} />}
          </button>
        </div>
        <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/rooms"}>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
