// import { initialItems } from '../data';
import Item from './Item';
import PropTypes from 'prop-types';

const PackingList = ({items, onDeleteItems, onToggleItems}) => {

  return (
    <div className="list">
      <ul>
        {items.map((d) => (
          <Item key={d.id} item={d} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems}/>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;

PackingList.propTypes = {
  onToggleItems:PropTypes.func.isRequired,
  onDeleteItems:PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};