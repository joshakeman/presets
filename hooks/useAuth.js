import { useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", setUser);
    netlifyIdentity.on("logout", () => setUser(null));

    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) setUser(currentUser);
  }, []);

  return { user, isLoggedIn: !!user };
}
