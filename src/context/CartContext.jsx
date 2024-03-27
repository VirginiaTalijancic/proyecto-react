import { useState, createContext } from "react"

export const CartContext = createContext(10)
export const CartProvider = ({chidren}) => {
   const [cart, setCart] = useState ([])
   console.log(cart)
   
   const addItem = (productsToAdd) => {
    if (!isInCart (productsToAdd.id)) {
        setCart ( prev =>[...prev, productsToAdd] )
    }else{
        console.error("el producto ya esta agregado")
    }
   }
   
   const isInCart = (id) => {
    return cart.some (prod.id == id)
   }
   
   const getTotalQuantity = () =>{
    let acumulador = 0
    
    cart.forEach ( prod =>{
        acumulador+= prod.quantity
       })

       return acumulador
   }

   const totalQuantity = getTotalQuantity ()

    return(
        <CartContext.Provider value={{cart, addItem, totalQuantity}}>
            {chidren}
        </CartContext.Provider>
    )
}