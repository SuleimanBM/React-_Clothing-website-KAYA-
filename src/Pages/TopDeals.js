import React from 'react'
import "../styles/Home.css"
import { useState,useEffect } from 'react';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { List } from '../List/List';

function TopDeals() {

  const [discount, setDiscount] = useState(() => {
    const lastUpdate = window.localStorage.getItem('lastUpdate');
    const savedItems = JSON.parse(window.localStorage.getItem('discountItems'));
    const now = Date.now();

    // If there's no saved items or last update, or it's been more than 3 hours since the last update
    if (!savedItems || !lastUpdate || now - lastUpdate > 5000) {
      const newItems = [...Randomlist(List, 9)];
      window.localStorage.setItem('discountItems', JSON.stringify(newItems));
      window.localStorage.setItem('lastUpdate', now);
      return newItems;
    }

    // Otherwise, return the saved items
    return savedItems;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = [...Randomlist(List, 9)];
      setDiscount(newItems);
      window.localStorage.setItem('discountItems', JSON.stringify(newItems));
      window.localStorage.setItem('lastUpdate', Date.now());
    }, 5000);

    return () => clearInterval(interval);
  }, []);
   
  function Randomlist (arr, num){
    const randomIndex = [...arr].sort(() => 0.5 - Math.random());
    return randomIndex.slice(0, num);
  }
  return (
    <div className='topdeals'>
    {discount.filter((item)=>{ return (item.id.slice(0, 2) === "fg" || item.id.slice(0, 2) === "af" || item.id.slice(0, 2) === "kt")}).map((item) => {
      return(<TopItem 
        Id={item.id}
        name={item.name}
        image={item.image}
        price={item.price }
      
      />)
    })}
  </div>
  )

}

function TopItem ({Id, image, name,price}){
  const {getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart,} = useShoppingCart()
  const quantity =  getItemQuantity(Id);
  
  return (
   
    <div className='topitem'>
  <div style={{backgroundImage: `url(${image})`}}></div>
    <div >
    <p ><b>{name}</b></p>
  <h4><span style={{textDecoration: "line-through", color: "red"}}>GHC {price}</span  > GHC {(price * 0.8).toFixed(2)}</h4>
  
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
)
}
export default TopDeals