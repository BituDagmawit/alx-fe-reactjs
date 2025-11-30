import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async (p = 1) => {
    const results = await searchUsers({
      username,
      location,
      minRepos,
      page: p,
    });

    if (p === 1) setUsers(results);
    else setUsers((prev) => [...prev, ...results]);

    setPage(p);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      {/* Search Form */}
      <div className="space-y-3 p-4 border rounded-xl shadow-sm">
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
          onClick={() => handleSearch(1)}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-xl shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.login}</p>
              <p className="text-sm text-gray-600">
                Location: {user.location || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Repos: {user.public_repos}
              </p>
            </div>

            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 underline"
            >
              View
            </a>
          </div>
        ))}

        {users.length > 0 && (
          <button
            onClick={() => handleSearch(page + 1)}
            className="w-full bg-gray-800 text-white py-2 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
