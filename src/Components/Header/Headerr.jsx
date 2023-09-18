import React from "react";
import { Link } from "react-router-dom";

const Headerr = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/users">users</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
};

export default Headerr;
