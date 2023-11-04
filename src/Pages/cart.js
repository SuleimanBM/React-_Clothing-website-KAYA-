import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import '../styles/Navbar.css'
function Cart() {
  const {cartItems} = useShoppingCart()
  return (
    <div >
      {cartItems.map((item) => {
        return (<Incart
        Id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        />
        )
      })}
    </div>
  )
}
function Incart({Id, name, image, price}){
<div className='cart'>
<div style={{backgroundImage: `url(${image})`}}></div>
          <p ><b>{name}</b></p>
        <h4>GHC {price}</h4>
</div>
}

export default Cart