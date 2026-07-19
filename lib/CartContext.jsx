'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('shine_beauty_cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('shine_beauty_cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item) => {
    // item is { category, name, price }
    setCart((prevCart) => {
      // Check if already in cart
      const exists = prevCart.some(
        (i) => i.category === item.category && i.name === item.name
      );
      if (exists) return prevCart;
      return [...prevCart, item];
    });
  };

  const removeFromCart = (category, name) => {
    setCart((prevCart) =>
      prevCart.filter((i) => !(i.category === category && i.name === name))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (category, name) => {
    return cart.some((i) => i.category === category && i.name === name);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      // Clean price string, e.g. "₹299" -> 299 or "₹1,349" -> 1349
      const priceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return total + priceNum;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isItemInCart,
        getCartTotal,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
