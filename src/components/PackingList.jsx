import Item from './Item';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PackingList = ({ items, onDeleteItems, onToggleItems, onDeleteAllItems }) => {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((d) => (
          <Item
            key={d.id}
            item={d}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;

PackingList.propTypes = {
  onToggleItems: PropTypes.func.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
  onDeleteAllItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};
