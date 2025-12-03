import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setResults(data);

      if (data.length === 0) setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">

      {/* Search Form */}
      <form
        onSubmit={submit}
        className="space-y-3 p-4 border shadow rounded-xl"
      >
        <input
          type="text"
          placeholder="Search username..."
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repos (optional)"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Search
        </button>
      </form>

      {/* Status Messages */}
      {loading && <p className="text-center">Loading...</p>}
      {!loading && error && (
        <p className="text-center text-red-600 font-medium">
          Looks like we cant find the user
        </p>
      )}

      {/* Results List */}
      {!loading && results.length > 0 && (
        <div className="space-y-4">
          {results.map((u) => (
            <div
              key={u.id}
              className="flex items-center justify-between border p-3 rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <img
                  src={u.avatar_url}
                  alt={u.login}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <p className="font-semibold">{u.login}</p>
                  <p className="text-sm text-gray-600">Score: {u.score}</p>
                </div>
              </div>

              <a
                href={u.html_url}
                target="_blank"
                className="text-blue-600 underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
