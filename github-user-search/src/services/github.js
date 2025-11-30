// simple GitHub API service
import axios from 'axios';

const GITHUB_BASE = 'https://api.github.com';

export async function searchUser(username) {
  const url = `${GITHUB_BASE}/users/${encodeURIComponent(username)}`;
  const res = await axios.get(url /*, { headers: { Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` } }*/);
  return res.data;
}
