import axios from "axios";

const BASE = "https://api.github.com";

const client = axios.create({ baseURL: BASE });

/**
 * Must be exported with this exact name.
 * Calls GET https://api.github.com/users/{username}
 */
export async function fetchUserData(username) {
  if (!username) throw new Error("username required");
  const url = `/users/${encodeURIComponent(username)}`;
  const res = await client.get(url);
  return res.data; // ensure caller gets the user object
}
