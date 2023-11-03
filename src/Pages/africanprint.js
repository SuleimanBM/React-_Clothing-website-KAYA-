import React from 'react'
import { Africanprintlist } from '../List/African'
import { useState } from 'react'

function APItem ({image, price}){
  const bool = false;
  const [button, setButton] = useState(bool)
  const buttonAppear = () =>{
    setButton(!bool)
  }
  const butoonDisappear = () => {
    setButton(bool)
  }
  
  return(
    <div className='APItem' onMouseOver={buttonAppear} onMouseOut={butoonDisappear}>
      <div style={{backgroundImage: `url(${image})`}}></div>
      
      <h4>GHC {price }</h4>
  {button && <div><button id="info">ADD TO CART</button></div>}
    </div>
  )

}

function africanprint() {
  return (
    <div className='africanprint'>
      {Africanprintlist.map((apitem) =>{
        return(<APItem 
          key={apitem.id}
          image={apitem.image}
          price={apitem.price}
        />)})}
    </div>
  )
}

export default africanprint