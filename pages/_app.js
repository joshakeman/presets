import "../styles/global.css";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/authContext";
import netlifyIdentity from "netlify-identity-widget";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}
