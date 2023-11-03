import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../fuguAsset/logo.jpg"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={logo}  alt=''/>
        <h1>KAYA</h1>
      </div>
      <div className='rightside'>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/cart"><h2>Cart</h2></Link>
        <Link to="/about"><h2>About</h2></Link>
        <Link to="/contact"><h2>Contact</h2></Link>
      </div>
    </div>
  )
}

export default Navbar