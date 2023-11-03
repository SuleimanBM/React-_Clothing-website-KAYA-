import React from 'react'
import "../styles/Home.css"
import { Fugulist } from '../List/Fugu';
import { useState,useEffect } from 'react';
import { Kentelist } from '../List/Kente';
import { Africanprintlist } from '../List/African';


function TopDeals() {

  const [discount, setDiscount] = useState(() => {
    const lastUpdate = window.localStorage.getItem('lastUpdate');
    const savedItems = JSON.parse(window.localStorage.getItem('discountItems'));
    const now = Date.now();

    // If there's no saved items or last update, or it's been more than 3 hours since the last update
    if (!savedItems || !lastUpdate || now - lastUpdate > 10000) {
      const newItems = [...Randomlist(Africanprintlist, 3), ...Randomlist(Fugulist, 3), ...Randomlist(Kentelist, 3)];
      window.localStorage.setItem('discountItems', JSON.stringify(newItems));
      window.localStorage.setItem('lastUpdate', now);
      return newItems;
    }

    // Otherwise, return the saved items
    return savedItems;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = [...Randomlist(Africanprintlist, 3), ...Randomlist(Fugulist, 3), ...Randomlist(Kentelist, 3)];
      setDiscount(newItems);
      window.localStorage.setItem('discountItems', JSON.stringify(newItems));
      window.localStorage.setItem('lastUpdate', Date.now());
    }, 10000);

    return () => clearInterval(interval);
  }, []);
   
  function Randomlist (arr, num){
    const randomIndex = [...arr].sort(() => 0.5 - Math.random());
    return randomIndex.slice(0, num);
  }
  return (
    <div className='topdeals'>
    {discount.map((topitem) => {
      return(<TopItem 
        key={topitem.id}
        name={topitem.name}
        image={topitem.image}
        price={topitem.price }
      
      />)
    })}
  </div>
  )

}

function TopItem ({image, name,price}){
  const bool = false;
  const [button, setButton] = useState(bool)
  const buttonAppear = () =>{
    setButton(!bool)
  }
  const butoonDisappear = () => {
    setButton(bool)
  }
  return (
    <div>
    <div className='topitem' onMouseOver={buttonAppear} onMouseOut={butoonDisappear}>
  <div style={{backgroundImage: `url(${image})`}}></div>
    <div >
    <p ><b>{name}</b></p>
  <span  style={{display: 'block'}}> <p style={{display: 'inline',textDecoration: "line-through", color: "red"}} >GHC {price}</p> <h4 style={{display: 'inline'}}>GHC {(price * 0.8).toFixed(2)}</h4> </span>
  {button && <div><button id="info">ADD TO CART</button></div>}
    </div>
 
    
    </div>
    </div>
)
  
}

export default TopDeals