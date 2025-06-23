import { useEffect } from "react";

export default function PayPalCheckout({ amount }) {
  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}`
              );
              // Optional: redirect, clear cart, store order, etc.
            });
          },
        })
        .render("#paypal-button-container");
    }
  }, [amount]);

  return <div id="paypal-button-container" />;
}
