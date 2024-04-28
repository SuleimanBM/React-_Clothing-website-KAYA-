import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import '../styles/cart.css'
import { List } from "../List/List"

function Cart({Id, image,name,price}) {
  
  const {cartItems,} = useShoppingCart()
 const total = cartItems.reduce((total, cartItem,) => 
  {
    const item = List.find(i => i.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)
  return (
    <div className=' min-h-screen'>
      {cartItems.map((item) => {
        return (
          <Incart
            Id={item.id}
            {...item}
          />)}) 
          
      }
      
      <h2 className='text-black dark:text-white mt-14'>{total === 0? `YOU HAVE NO ITEMS IN YOUR CART`: `TOTAL: GHC ${total}`} </h2>
      
    </div>
  )
    }
function Incart({Id, quantity, total}){
  const {removeFromCart,  getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity} = useShoppingCart()
  const item = List.find(i => i.id === Id)
  if (item === null) return null
  
  

return (
  <div >
    <div className=' max-h-86'>
       <div className=' flex justify-between m-5 place-self-end'>
  <div className=''>
    <img className=' mb-4 rounded-md w-44 md:w-64 lg:w-72 h-52 md:h-72 bg-no-repeat bg-cover bg-center' src={item.image} alt=''/>
    <div className='flex flex-row justify-between'>
    <b className='text-black dark:text-white'>x{quantity}</b>
    <button className=' w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white' onClick={getItemQuantity(Id) > 0 ? ()=>  decreaseCartQuantity(Id) : removeFromCart(Id) }>-</button>
    <b className='text-black dark:text-white'>{getItemQuantity(Id)}</b>
    <button className=' w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white' onClick={()=> increaseCartQuantity(Id)}>+</button>
    </div>
  </div>

  <div className=' place-self-end justify-items-end'>
  <div className=' flex flex-row justify-between'>
  
  
  <p className=' text-black dark:text-white text-xs md:text-lg mr-4'><b>{item.name}</b></p>
    <h4 className='text-black dark:text-white'>GHC {item.price * quantity}</h4>
  
  </div>
  </div>
  <div>
  <button onClick={() => removeFromCart(Id)} className='h-10 w-10 border-2 absolute right-0 rounded-md font-medium bg-white da border-red-500   text-red-500'>&times;</button>
  </div>
</div>
<hr></hr>
  </div>
  </div> 
)
}
export default Cart