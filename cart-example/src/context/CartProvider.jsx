import { useState } from "react";
import cartContext from "./Cart";
import React from 'react'

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    return (
        <cartContext.Provider value={{ items, setItems }}>
            {/* Here `value` is reserve word */}
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;