import React from 'react'
import "../styles/Home.css"
import { Fugulist } from "../List/Fugu"
import { useState } from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'

function fuguFabric() {
  return (
    <div className='fuguFabric'>
    
      {Fugulist.map((fuguitem) => {
        return (<Fugu 
        Id={fuguitem.id}
        image={fuguitem.image}
        name={fuguitem.name}
        price={fuguitem.price}/>
        )})}
    
   </div>
  )

}
function Fugu({Id, image,name,price}){
const {getItemQuantity,
  increaseCartQuantity, 
  decreaseCartQuantity,
  removeFromCart,} = useShoppingCart()
const quantity =  getItemQuantity(Id);

return (
 
  <div className='fugu'>
<div style={{backgroundImage: `url(${image})`}}></div>
  <div >
  <p ><b>{name}</b></p>
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
export default fuguFabric