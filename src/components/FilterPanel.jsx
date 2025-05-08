import React from 'react';

const FilterPanel = ({ onFilter }) => {
  return (
    <select onChange={e => onFilter(e.target.value)}>
      <option value="">All</option>
      <option value="workflow">Workflow</option>
      <option value="action">Action</option>
    </select>
  );
};

export default FilterPanel;
