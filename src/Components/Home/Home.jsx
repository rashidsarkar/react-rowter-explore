import React from "react";
import { Link, Outlet } from "react-router-dom";
import Headerr from "../Header/Headerr";

const Home = () => {
  return (
    <div>
      <h2>this is component home</h2>
      <Headerr></Headerr>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
