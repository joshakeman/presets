import { useCart } from "../../hooks/useCart";
import CheckoutButton from "../../components/checkout-button";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  console.log(cart);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-4 border">
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <CheckoutButton cartItems={cart} />
        </>
      )}
    </div>
  );
}
