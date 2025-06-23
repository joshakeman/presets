import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext"; // adjust the path if needed

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // Determine key based on login status
  const cartKey = user ? `cart-${user.id}` : "cart-guest";

  const [cartReady, setCartReady] = useState(false); // ✅ New flag

  // Load cart from localStorage when user changes
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    setCart(savedCart);
    setCartReady(true); // ✅ Set ready after loading
  }, [cartKey]);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }, [cart, cartKey]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, user, cartReady }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
