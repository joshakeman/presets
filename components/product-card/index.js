import { useAuth } from "../hooks/useAuth";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { user } = useAuth();
  const { cart, addToCart, removeFromCart } = useCart(user);

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
