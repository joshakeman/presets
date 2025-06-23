import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function AddToCartButton({ item }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full bg-[#CE790A] text-black border-2 border-black py-2 px-4 transition-all ${
        added ? "bg-green-600 text-white border-green-800" : ""
      }`}
    >
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}
