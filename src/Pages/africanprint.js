import React from 'react'

import { useState } from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext';
import Item from './Item';
import { List } from '../List/List';



function africanprint() {
  return (
    <div className=' w-screen h-auto flex flex-row flex-wrap justify-around'>
      {List.filter((item)=>{ return (item.id.slice(0, 2) === "af")}).map((item) => {
        return (<Item 
        Id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}/>
        )})}
    </div>
  )
}

export default africanprint