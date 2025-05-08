import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import MarketplaceGrid from '../components/MarketplaceGrid';
import { fetchMarketplaceItems } from '../services/api';

const Home = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchMarketplaceItems().then(data => {
      setItems(data);
      setFilteredItems(data);
    });
  }, []);

  useEffect(() => {
    let temp = [...items];
    if (searchQuery) {
      temp = temp.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (filter) {
      temp = temp.filter(item => item.category === filter);
    }
    setFilteredItems(temp);
  }, [searchQuery, filter, items]);

  return (
    <>
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <FilterPanel onFilter={setFilter} />
      <MarketplaceGrid items={filteredItems} />
    </>
  );
};

export default Home;
