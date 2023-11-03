import React from 'react'
import "../styles/Home.css"
import { Fugulist } from "../List/Fugu"
import { useState } from 'react'

function fuguFabric() {
  return (
    <div className='fuguFabric'>
    
      {Fugulist.map((fuguitem) => {
        return (<Fugu 
        key={fuguitem.id}
        image={fuguitem.image}
        name={fuguitem.name}
        price={fuguitem.price}/>
        )})}
    
   </div>
  )

}
function Fugu({image,name,price}){
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
    <div className='fugu' onMouseOver={buttonAppear} onMouseOut={butoonDisappear}>
  <div style={{backgroundImage: `url(${image})`}}></div>
   
    <p style={{display: 'inline'}}><b>{name}</b></p>
  <h4>GHC {price }</h4>
  {button && <div><button id="info">ADD TO CART</button></div>}
    
 
    
    </div>
    </div>
  )
  
 
}
export default fuguFabric