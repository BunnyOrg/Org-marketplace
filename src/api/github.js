const BASE_URL = 'https://api.github.com';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const ORG = import.meta.env.VITE_GITHUB_ORG;

const headers = {
  Authorization: `token ${TOKEN}`,
  Accept: 'application/vnd.github+json'
};

export async function fetchRepos() {
  const res = await fetch(`${BASE_URL}/orgs/${ORG}/repos?per_page=100`, { headers });
  if (!res.ok) throw new Error('Failed to fetch repositories');
  return res.json();
}

export async function fetchWorkflows(repo) {
  const res = await fetch(`${BASE_URL}/repos/${ORG}/${repo}/contents/.github/workflows`, { headers });
  if (!res.ok) return []; // skip erroring repos
  const data = await res.json();
  return data.workflows || [];
}

export async function fetchActionsFolder(repo) {
  const res = await fetch(`${BASE_URL}/repos/${ORG}/${repo}/contents/.github/actions`, { headers });
  if (!res.ok) return [];

  const folders = await res.json();
  return folders.map((item) => ({
    name: item.name,
    path: item.path,
    html_url: item.html_url,
    type: 'action'
  }));
}
