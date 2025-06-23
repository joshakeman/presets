import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";

export function useCart() {
  const { user } = useAuth();
  const userId = user?.email || "anon";
  const [cart, setCart] = useState([]);
  const storageKey = `cart-${userId}`;

  // 🧠 Load cart from localStorage on mount or when user changes
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      console.log(`[🛒] Loaded cart for ${userId}:`, JSON.parse(stored));
      setCart(JSON.parse(stored));
    } else {
      console.log(`[🛒] No cart found for ${userId}, starting empty`);
      setCart([]);
    }
  }, [storageKey]);

  // 🔁 Migrate guest cart → user cart on login
  useEffect(() => {
    if (user?.email) {
      const anonCart = localStorage.getItem("cart-anon");
      const userCart = localStorage.getItem(`cart-${user.email}`);

      if (anonCart && !userCart) {
        console.log("[🔄] Migrating cart-anon → cart-user:", user.email);
        localStorage.setItem(`cart-${user.email}`, anonCart);
        localStorage.removeItem("cart-anon");
        setCart(JSON.parse(anonCart));
      } else {
        console.log("[🔍] No anon cart to migrate or user cart already exists");
      }
    }
  }, [user?.email]);

  // ✅ Save cart to localStorage
  function save(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem(storageKey, JSON.stringify(updatedCart));
    console.log(`[💾] Saved cart for ${userId}:`, updatedCart);
  }

  function addToCart(item) {
    console.log("[➕] Adding to cart:", item);
    save([...cart, item]);
  }

  function removeFromCart(index) {
    console.log("[❌] Removing item at index:", index);
    const updated = cart.filter((_, i) => i !== index);
    save(updated);
  }

  function clearCart() {
    console.log("[🧹] Clearing entire cart");
    save([]);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
