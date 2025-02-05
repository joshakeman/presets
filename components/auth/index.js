import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return (
    <div className="auth-container">
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button
            className="menu-btn bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
            onClick={() => netlifyIdentity.logout()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="menu-btn bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
          onClick={() => netlifyIdentity.open()}
        >
          Login
        </button>
      )}
    </div>
  );
}
