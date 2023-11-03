import React from 'react'
import { Kentelist } from '../List/Kente'
import { useState } from 'react';

function KenteItem ({image,name, price}){
  const bool = false;
  const [button, setButton] = useState(bool)
  const buttonAppear = () =>{
    setButton(!bool)
  }
  const butoonDisappear = () => {
    setButton(bool)
  }

  return(
    <div className='KenteItem' onMouseOver={buttonAppear} onMouseOut={butoonDisappear}>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <p style={{display: 'inline'}}><b>{name}</b></p>
  <h4>GHC {price }</h4>
  {button && <div><button id="info">ADD TO CART</button></div>}
    </div>
  )
}

function kente() {
  return (
    <div className='kente'>
      {Kentelist.map((kenteitem) => {
        return(<KenteItem 
          key={kenteitem.id}
          name={kenteitem.name}
          image={kenteitem.image}
          price={kenteitem.price}
        />)
      })}
    </div>
  )
}



export default kente