import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import '../styles/cart.css'
import { List } from "../List/List"

function Cart({Id, image,name,price}) {
  const {cartItems} = useShoppingCart()
 const total = cartItems.reduce((total, cartItem) => 
  {
    const item = List.find(i => i.id === cartItem.Id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)
  return (
    <div >
      {cartItems.map((item) => {
        return (
          <Incart
            Id={item.id}
            {...item}
          />)}) 
          
      }
      
      <h2>{total === 0? `YOU HAVE NO ITEMS IN YOUR CART`: `TOTAL: GHC ${total}`} </h2>
      
    </div>
  )
    }
function Incart({Id, quantity, total}){
  const {removeFromCart,  getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity} = useShoppingCart()
  const item = List.find(i => i.id === Id)
  if (item == null) return null

return (
  <div id='Cart'>
       <div className='cart'>
  <div id='img'>
    <img src={item.image} />
    <b>x{quantity}</b>
    <button id='info' onClick={()=> decreaseCartQuantity(Id)}>-</button>
    <b>{getItemQuantity(Id)}</b>
    <button id='info' onClick={()=> increaseCartQuantity(Id)}>+</button>
  </div>

  <div id='detail'>
  <button onClick={() => removeFromCart(Id)} style={{backgroundColor: 'white',color: 'red', fontSize: '40px' , border: '1px solid red'}}>&times;</button>
    <p ><b>{item.name}</b></p>
    <h4 >GHC {item.price * quantity}</h4>
  </div>
</div>
<hr></hr>
  </div> 
)
}
export default Cart