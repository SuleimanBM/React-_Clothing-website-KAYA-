import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../fuguAsset/logo.jpg"
import { useShoppingCart } from '../Context/ShoppingCartContext'

function Navbar() {
  const {cartQuantity, cartItem} = useShoppingCart()
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={logo}  alt=''/>
        <h1>KAYA</h1>
      </div>
      <div className='rightside'>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/cart"><h4>Cart
          {cartQuantity !== 0 ?
            <div style={{width:'20px',height:'20px',
            borderRadius: '50%',backgroundColor: 'red',
            color: 'white',position: 'relative',
            transform: 'translate(300%, 15%)'}}>
              {cartQuantity}
              </div> : ""}
        </h4>
            </Link>
        <Link to="/about"><h4>About</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link>
      </div>
    </div>
  )
}

export default Navbar