import React from 'react';
import MarketplaceItem from './MarketplaceItem';

const MarketplaceGrid = ({ items }) => (
  <div className="grid">
    {items.map((item, idx) => (
      <MarketplaceItem key={idx} item={item} />
    ))}
  </div>
);

export default MarketplaceGrid;
