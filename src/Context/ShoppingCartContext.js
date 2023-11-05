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
    function getItemQuantity(Id){
        return cartItems.find(item => item.Id === Id)?.quantity || 0
    }

 function increaseCartQuantity(Id){
        setCartItems(currItems => {
            if (currItems.find(item => item.Id == Id) == null) {
                return [...currItems, {Id, quantity: 1}]
            }else {
                return currItems.map(item => {
                    if(item.Id === Id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(Id){
        setCartItems(currItems => {
            if (currItems.find(item => item.Id == Id) === 1) {
                return currItems.filter(item => item.Id !== Id)
            }else {
                return currItems.map(item => {
                    if(item.Id === Id) {
                        return { ...item, quantity: item.quantity - 1 }
                    }else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(Id){
        setCartItems(currItems => {
            return currItems.filter(item => item.Id !==Id)
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