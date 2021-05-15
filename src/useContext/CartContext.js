import React, { createContext, useReducer, useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children, initialState, reducer }) => {
  return (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
