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

    function getItemQuantity(key){
        return cartItems.find(item => item.key === key)?.quantity || 0
    }

 function increaseCartQuantity(key){
        setCartItems(currItems => {
            if (currItems.find(item => item.key == key) == null) {
                return [...currItems, {key, quantity: 1}]
            }else {
                return currItems.map(item => {
                    if(item.key === key) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(key){
        setCartItems(currItems => {
            if (currItems.find(item => item.key == key) === 1) {
                return currItems.filter(item => item.key !== key)
            }else {
                return currItems.map(item => {
                    if(item.key === key) {
                        return { ...item, quantity: item.quantity - 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(key){
        setCartItems(currItems => {
            return currItems.filter(item => item.key !==key)
        })
    }

    return <ShoppongCartContext.Provider 
    value={{
         getItemQuantity,
         increaseCartQuantity, 
         decreaseCartQuantity,
         removeFromCart, 
         cartQuantity,
         cartItems,
         }}>
        {children
        }
    </ShoppongCartContext.Provider>
}