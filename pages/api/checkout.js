import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log("✅ API route `/api/checkout` hit!"); // ✅ Debugging

  if (req.method !== "POST") {
    console.log("❌ Invalid request method:", req.method);
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const { items } = req.body;
    console.log("🛒 Received cart items:", JSON.stringify(items, null, 2)); // ✅ Debugging

    if (!items || items.length === 0) {
      console.log("❌ Error: No items in cart");
      return res.status(400).json({ error: "Cart is empty!" });
    }

    // Ensure each item has the required fields
    items.forEach((item, index) => {
      if (!item.name || !item.price || !item.quantity) {
        console.log(
          `❌ Error: Item at index ${index} is missing fields!`,
          item
        );
        throw new Error("Each item must have name, price, and quantity.");
      }
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name || "Unknown Item", // Ensure name exists
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price * 100), // Convert dollars to cents
        },
        quantity: item.quantity || 1,
      })),
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    console.log("✅ Stripe session created:", session.id); // ✅ Debugging

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe Checkout Error:", error);
    res.status(500).json({ error: error.message });
  }
}
