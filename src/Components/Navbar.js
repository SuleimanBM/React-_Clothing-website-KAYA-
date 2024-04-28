import React from 'react'
import {Link} from "react-router-dom"
import "../styles/Navbar.css"
import { IoCart, IoHome } from 'react-icons/io5';
import { useShoppingCart } from '../Context/ShoppingCartContext'
import { useState } from 'react';



function Navbar() {
  const [onFocus, setOnFocus] = useState(true)

  const isFocus = () => {
    setOnFocus(!onFocus)
  }
  
  
  const {cartQuantity,} = useShoppingCart()
  return (
    
      <div className=' w-full h-20 bg-slate-900 text-white border-b-2 border-yellow-500 flex flex-row justify-between '>
      <div className=' flex flex-row items-center justify-start '>
        
        <h1 className=' ml-5'>KAYA</h1>
      </div>
      <div >
          
          <div className='display h-full flex flex-row items-center justify-around' style={{justifyItems: 'space-between'}}>
          <Link to="/" className=' mr-5 text-2xl md:text-4xl' onClick={isFocus}><IoHome color={onFocus ? 'gold' : 'white'} /></Link>
          <Link to="/cart" className=' mr-5 text-2xl md:text-4xl z-50' onClick={isFocus}><IoCart color={onFocus ? 'white' : 'gold'}>Cart
          
            </IoCart>
            </Link>
            {cartQuantity !== 0 ?
            <div className=' w-4 h-5 rounded-full bg-red-700 text-white text-sm absolute top-5 right-0 sm:right-0 z-50 cursor-pointer' 
            >
              <h4>{cartQuantity}</h4>
              </div> : ""}
            
          </div>
          </div>
         
        
      
        </div>
    
      
    
  )
}

export default Navbar