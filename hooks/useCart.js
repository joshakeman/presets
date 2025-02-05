import { useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  useEffect(() => {
    if (user) {
      // Load cart from Netlify Identity metadata
      const storedCart =
        JSON.parse(localStorage.getItem(`cart-${user.id}`)) || [];
      setCart(storedCart);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart-${user.id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return { cart, addToCart, removeFromCart };
}
