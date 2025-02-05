const handleCheckout = async () => {
  // Send order data to FaunaDB
  await fetch("/.netlify/functions/save-order", {
    method: "POST",
    body: JSON.stringify({ user, cart }),
  });

  // Redirect to Stripe checkout
  const res = await fetch("/.netlify/functions/create-checkout", {
    method: "POST",
    body: JSON.stringify({ cart }),
  });

  const data = await res.json();
  window.location.href = data.url;
};
