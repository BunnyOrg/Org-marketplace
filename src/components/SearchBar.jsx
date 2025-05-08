import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search workflows or actions..."
      onChange={e => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
