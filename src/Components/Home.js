import React from "react";
import Homebar from "./Homebar";
import "../styles/Home.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className=" w-screen h-auto">
      <Homebar />
      <Outlet />
    </div>
  );
}

export default Home;
