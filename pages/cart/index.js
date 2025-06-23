import { useCart } from "../../context/CartContext";
import Layout from "../../components/layout";
import CheckoutButton from "../../components/checkout-button";
import PayPalCheckout from "../../components/paypalCheckout";
import Script from "next/script";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    return sum + item.price * quantity;
  }, 0);

  return (
    <Layout
      backgroundColor={"bg-backgroundBlueFaded"}
      backgroundImage={"bg-victorianPattern"}
    >
      <div className="container mx-auto p-6">
        {/* PayPal SDK */}
        <Script
          src={`https://www.paypal.com/sdk/js?client-id=Aa-JflnT6zEjRKCnrWcyNbwuqd0rl_0NgbolCseecbNYLnokjqGwmku6glsApmHrngqtWVyoXDxJE7w1&currency=USD&disable-funding=card`}
          strategy="afterInteractive"
        />

        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-6">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4"
                >
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="ml-2 text-gray-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6">
              Total: ${total.toFixed(2)}
            </h3>

            {/* Stripe Checkout */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Pay with Card</h4>
              <p className="text-sm text-gray-600 mb-2">
                Secure checkout powered by Stripe
              </p>
              <CheckoutButton cartItems={cart} />
            </div>

            {/* PayPal Checkout */}
            <div className="mt-8 border-t pt-6">
              <h4 className="text-lg font-medium mb-2">Or pay with PayPal</h4>
              <p className="text-sm text-gray-600 mb-2">
                You can also pay using your PayPal account
              </p>
              <PayPalCheckout amount={total} />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
