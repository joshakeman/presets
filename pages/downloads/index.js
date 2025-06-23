// pages/downloads.js
import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    const currentUser = netlifyIdentity.currentUser();

    if (!currentUser) {
      setError("You must be logged in to view your downloads.");
      setLoading(false);
      return;
    }

    setUser(currentUser);

    fetch("/.netlify/functions/get-purchases", {
      headers: {
        "x-user-email": currentUser.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDownloads(data.downloads || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong fetching your purchases.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading your downloads...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Downloads</h1>
      {downloads.length === 0 ? (
        <p>You haven’t purchased anything yet.</p>
      ) : (
        <ul className="space-y-2">
          {downloads.map((url, idx) => (
            <li key={idx}>
              <a href={url} className="text-blue-600 underline" download>
                {url.split("/").pop()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
