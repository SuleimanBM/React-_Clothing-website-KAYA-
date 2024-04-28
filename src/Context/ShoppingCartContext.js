import { createContext, useContext, useState } from "react";


const ShoppongCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppongCartContext)
}

export function ShoppingCartProvider({ children}) {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity =  cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )
       function cartTotal (){return(
        cartItems.reduce((total, item) => total + item.quantity * item.price,0)
       )}
    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

 function increaseCartQuantity(id){
        setCartItems(currItems => {
            if (currItems.find(item => item.id == id) == null) {
                return [...currItems, {id, quantity: 1}]
            }else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id){
        setCartItems(currItems => {
            if (currItems.find(item => item.id == id) === 1) {
                return currItems.filter(item => item.id !== id)
            }else {
                return currItems.map(item => {
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !==id)
        })
    }

    return <ShoppongCartContext.Provider 
    value={{
         getItemQuantity,
         increaseCartQuantity, 
         decreaseCartQuantity,
         removeFromCart, 
         cartTotal,
         cartQuantity,
         cartItems,
         }}>
        {children
        }
    </ShoppongCartContext.Provider>
}