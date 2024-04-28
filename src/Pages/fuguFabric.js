import React from 'react'
import "../styles/Home.css"
import Item from './Item'
import { List } from '../List/List'


function fuguFabric() {
  return (
    <div className=' w-full h-auto flex flex-row flex-wrap justify-around'>
    
      {List.filter((item)=>{ return (item.id.slice(0, 2) === "fg")}).map((item) => {
        return (<Item 
        Id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}/>
        )})}
    
   </div>
  )

}

export default fuguFabric