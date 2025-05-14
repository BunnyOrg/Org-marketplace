import { logger } from '../utils/logger';
import axios from 'axios';
//require("dotenv").config();
const BASE_URL = 'https://api.github.com';
//const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const ORG = import.meta.env.VITE_GITHUB_ORG;

//const headers = {
//  Authorization: `token ${TOKEN}`,
//  Accept: 'application/vnd.github+json'
//};

//export async function fetchRepos() {
const fetchRepos = async () => {
  logger.debug('Calling GitHub API: list repos');
//  const res = await fetch(`${BASE_URL}/orgs/${ORG}/repos?per_page=100`, { headers });
  const response = await axios.get(`${BASE_URL}/orgs/${ORG}/repos?per_page=100`);
  console.log(res.json());
  if (!res.ok) {
    logger.error('Failed to fetch repos: ',res.status);
    throw new Error('Failed to fetch repositories');
  }
  return res.json();
}

//export async function fetchWorkflows(repo) {
const fetchWorkflows = async (repo) => {  
  logger.debug('Calling GitHub API: Get workflows');
//  const res = await fetch(`${BASE_URL}/repos/${ORG}/${repo}/contents/.github/workflows`, { headers });
  const response = await axios.get('${BASE_URL}/repos/${ORG}/${repo}/contents/.github/workflows');
  if (!res.ok) return []; // skip erroring repos
  const data = await res.json();
  return data.workflows || [];
}

export async function fetchActionsFolder(repo) {
  logger.debug('Calling GitHub API: Get Actions');
  const res = await fetch(`${BASE_URL}/repos/${ORG}/${repo}/contents/.github/actions`, { headers });
  if (!res.ok) return [];

  const folders = await res.json();
  return folders.map((item) => ({
    name: item.name,
    path: item.path,
    html_url: item.url,
    type: 'action'
  }));
}
