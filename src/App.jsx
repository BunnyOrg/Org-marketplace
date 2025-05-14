import LogPanel from './components/LogPanel';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchFilterBar from './components/SearchFilterBar';
import MarketplaceList from './components/MarketplaceList';
import { fetchRepos, fetchWorkflows, fetchActionsFolder } from './api/github'; 
import { logger } from './utils/logger';

//const MOCK_DATA = [
//  { id: 1, name: 'CI Pipeline', type: 'workflow', description: 'CI with Node.js' },
//  { id: 2, name: 'Docker Build Action', type: 'action', description: 'Build images' },
//  { id: 3, name: 'Python Test', type: 'workflow', description: 'Test with pytest' },
//];

export default function App() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadData() {
      logger.info('Fetching repositories...');
      try {
        const repos = await fetchRepos();
        logger.info('Fetched ${repo.length} repos');
        
        let collected = [];

        for (const repo in repos) {
	  logger.debug('Fetching workflows for: ${repo.name}');
          const workflows = await fetchWorkflows(repo.name);

	  logger.debug('Fetching actions for: ${repo.name}');
          const actions = await fetchActionsFolder(repo.name);

          collected.push(
            ...workflows.map(w => ({
              name: w.name,
              type: 'workflow',
              repo: repo.name,
              path: w.path,
              url: w.html_url || '',
            })),
            ...actions.map(a => ({
              id: `${repo.name}-${a.name}`,
              name: a.name,
              type: 'action',
              repo: repo.name,
              path: a.path,
              url: a.html_url || '',
            }))
          );
        }

        setItem(collected);
        logger.info('All data loaded successfully.');
      } catch (err) {
        logger.error('Error loading data: ', err);
      }
    }

    loadData();
  }, []);

 // const filtered = MOCK_DATA.filter((item) => {
 //   const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
 //   const matchesType = typeFilter === 'all' || item.type === typeFilter;
 //   return matchesQuery && matchesType;
 // });
  const filtered = items.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    return matchesQuery && matchesType;
  });

  return (
    <div>
      <Header />
      <SearchFilterBar
        query={query}
        onQueryChange={setQuery}
        filter={typeFilter}
        onFilterChange={setTypeFilter}
      />
      <MarketplaceList items={filtered} />
      <LogPanel />
    </div>
  );
}

