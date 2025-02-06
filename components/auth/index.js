import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import Link from "next/link";

export default function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return (
    <>
      {user ? (
        <Link
          className="bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%] bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
          onClick={() => netlifyIdentity.logout()}
          href="#"
        >
          Logout
        </Link>
      ) : (
        <Link
          className="bg-black border-2 border-[#CE790A] py-2 px-6 w-[30%] sm:w-[50%] md:w-[45%] lg:w-[40%] bourbonbase menu-text text-2xl letterpress-button focus:ring-2 focus:ring-offset-2"
          onClick={() => netlifyIdentity.open()}
          href="#"
        >
          Login
        </Link>
      )}
    </>
  );
}
