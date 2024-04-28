import React from 'react'
import Item from './Item';
import { List } from '../List/List';
import { useShoppingCart } from '../Context/ShoppingCartContext';



function kente() {
  return (
    <div className=' w-full h-auto flex flex-row flex-wrap justify-around '>
      {List.filter((item)=>{ return (item.id.slice(0, 2) === "kt")}).map((item) => {
        return(<Item
          Id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
        />)
      })}
    </div>
  )
}



export default kente