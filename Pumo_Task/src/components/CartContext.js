import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const incrementQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    console.log('Clearing cart...'); 
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart,setCart, addItemToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;  // Exporting CartProvider as default export
