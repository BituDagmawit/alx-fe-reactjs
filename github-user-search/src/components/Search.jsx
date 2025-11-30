import { useState } from "react";
import { advancedSearchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);

  async function submit(e) {
    e.preventDefault();
    const res = await advancedSearchUsers({ username, location, minRepos });
    setResults(res);
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <form onSubmit={submit} className="space-y-3 p-4 border rounded-lg shadow">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Search
        </button>
      </form>

      <div className="space-y-3">
        {results.map((u) => (
          <div
            key={u.id}
            className="p-3 border rounded-lg shadow flex justify-between"
          >
            <div>
              <p className="font-semibold">{u.login}</p>
              <p className="text-sm text-gray-600">
                Score: {u.score}
              </p>
            </div>

            <a
              className="text-blue-600 underline"
              href={u.html_url}
              target="_blank"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
