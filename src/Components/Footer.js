import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" flex flex-col w-full h-56 bg-slate-900 m-auto">
      <div className=" flex flex-col justify-around h-40">
        <Link to="/about" className=" mr-5 text-amber-400 hover:underline hover:decoration-solid hover:decoration-amber-400">
          <h4>About</h4>
        </Link>
        <Link to="/contact" className=" mr-5 text-amber-400 hover:underline hover:decoration-solid hover:decoration-amber-400">
          <h4>Contact</h4>
        </Link>
      </div>
      <div>
        <h6 className=" text-amber-400 text-sm "> Copyright &copy; 2023 Kaya LLC.All rights reserved</h6>
      </div>
    </div>
  );
}

export default Footer;
