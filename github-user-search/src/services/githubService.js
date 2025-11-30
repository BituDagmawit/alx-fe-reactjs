// githubService.js

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  // Build GitHub search query
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=10`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items) return [];

  // Search API does NOT return full details → we fetch each user's details
  const detailedUsers = await Promise.all(
    data.items.map(async (u) => {
      const res = await fetch(u.url);
      return await res.json();
    })
  );

  return detailedUsers;
};
