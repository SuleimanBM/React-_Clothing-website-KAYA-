import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext';

function Item({Id, image,name,price}) {
        const {getItemQuantity,
          increaseCartQuantity, 
          decreaseCartQuantity,
          removeFromCart,} = useShoppingCart()
        const quantity = getItemQuantity(Id);
        
        return (
         
          <div className=' border-2 border-blue-950 dark:border-yellow-500 rounded-lg w-44 md:w-52 lg:w-72 h-64 md:h-72 lg:h-96 mb-5 flex flex-col justify-between shadow-md dark:shadow-slate-700'>
        <div className=' rounded-t-lg w-full h-52 md:h-64 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${image})`}}></div>
          <div className=' mb-2'>
          <p className=' text-xs md:text text-black dark:text-white'><b>{name}</b></p>
        <h4 className=' text-xs md:text text-black dark:text-white'>GHC {price}</h4>
        <div>
          {quantity === 0 ? (
          <button className=' w-36 md:w-44 lg:w-64 h-7 md:h-10 border-4 border-yellow-500 rounded-md bg-blue-950 dark:bg-slate-900 text-white' onClick={() => increaseCartQuantity(Id)}>ADD TO CART</button>
          ) : (
            <div>
              <button className=' w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white'  onClick={ quantity === 1 ? () => removeFromCart(Id) : () => decreaseCartQuantity(Id)}>-</button>
              <span><b>{quantity}</b></span> <b>in cart</b>
              <button className=' w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white' onClick={() => increaseCartQuantity(Id)}>+</button>
              
            </div>
          )}
          </div>
          </div>   
          </div>
        )
        }


export default Item