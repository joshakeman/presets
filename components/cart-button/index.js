import { useCart } from "../../hooks/useCart";
import Link from "next/link";

export default function CartButton() {
  const { cart } = useCart();

  return (
    <Link href="/cart">
      <button className="menu-btn bourbonbase menu-text text-2xl letterpress-button">
        🛒 Cart
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2">
            {cart.length}
          </span>
        )}
      </button>
    </Link>
  );
}
