import React, { createContext, useState, useEffect } from 'react'
import all_product from "../Assets/all_product"



export const ShopContext = createContext(null)

const getDefaultCart =()=>{
        let cart ={};
        for (let index=0;index<all_product.length+1;index++){
            cart[index]=0
        }
        return cart;
    }

const ShopContextProvider =(props)=> {
    const [cartItems,setCartItems] = useState(getDefaultCart())
    console.log(cartItems)

    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
        
    }
    


const removeFromCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
}

useEffect(() => {
  console.log(cartItems);
}, [cartItems]);

const getTotalCartITems= ()=>{
    let totalItem=0
    for (const item in cartItems){
        totalItem+= cartItems[item];

    }
    return totalItem
}

    const contextValue ={all_product,cartItems,addToCart,removeFromCart,getTotalCartITems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
