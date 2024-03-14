import { createContext, useContext } from "react";

const cartContext = createContext(null);

export const useCart = () => {
    const cart = useContext(cartContext);
    return cart;
}
export default cartContext;