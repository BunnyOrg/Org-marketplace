import React from 'react';

const MarketplaceItem = ({ item }) => (
  <div className="item">
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <small>{item.category}</small>
  </div>
);

export default MarketplaceItem;
