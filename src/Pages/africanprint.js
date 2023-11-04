import React from 'react'
import { Africanprintlist } from '../List/African'
import { useState } from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext';

function APItem ({Id,name, image, price}){
  const {getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart,} = useShoppingCart()
  const quantity =  getItemQuantity(Id);
  
  return (
   
    <div className='APItem'>
  <div style={{backgroundImage: `url(${image})`}}></div>
    <div >
  <p><b>{name}</b></p>
  <h4>GHC {price}</h4>
  <div>
    {quantity === 0 ? (
    <button id="Info" onClick={() => increaseCartQuantity(Id)}>ADD TO CART</button>
    ) : (
      <div>
        <button id='info'  onClick={ quantity === 1 ? () => removeFromCart(Id) : () => decreaseCartQuantity(Id)}>-</button>
        <span><b>{quantity}</b></span> <b>in cart</b>
        <button id='info' onClick={() => increaseCartQuantity(Id)}>+</button>
      </div>
    )}
    </div>
    </div>   
    </div>
  )
}

function africanprint() {
  return (
    <div className='africanprint'>
      {Africanprintlist.map((apitem) =>{
        return(<APItem 
          Id={apitem.id}
          name={apitem.name}
          image={apitem.image}
          price={apitem.price}
        />)})}
    </div>
  )
}

export default africanprint