import { useAuth } from "../../hooks/useAuth";

function CheckoutButton({ cartItems }) {
  const { user } = useAuth();

  if (cartItems.length === 0) return null;

  const handleCheckout = async () => {
    console.log("[💳] Starting checkout with:", cartItems);

    try {
      const checkoutRes = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: cartItems }),
      });

      const data = await checkoutRes.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Stripe session failed");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong during checkout.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-[#CE790A] border-2 border-black py-2 px-6 w-full bourbonbase text-base md:text-lg lg:text-xl whitespace-nowrap"
      aria-label="Proceed to checkout"
    >
      Checkout
    </button>
  );
}

export default CheckoutButton;
