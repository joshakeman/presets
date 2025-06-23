import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  useEffect(() => {
    if (user) {
      fetch("/.netlify/functions/get-orders", {
        method: "POST",
        body: JSON.stringify({ userId: user.id }),
      })
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  if (!user) {
    return <p>Please log in to view your orders.</p>;
  }

  return (
    <div>
      <h1>Your Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Order Date: {new Date(order.date).toLocaleString()}</p>
              <ul>
                {order.cart.map((item, i) => (
                  <li key={i}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
