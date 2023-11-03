import React from 'react'
import Homebar from "./Homebar"

import Fugu_fabric from "../Pages/fuguFabric"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../styles/Home.css"
import { Link, Outlet } from 'react-router-dom';


function Home() {
  return (
    <div className='Home'>
      <Homebar />
      <Outlet />
    </div>
  )
}

export default Home;