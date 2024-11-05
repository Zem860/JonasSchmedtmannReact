import PropTypes from 'prop-types';
const Item = ({ item, onDeleteItems, onToggleItems }) => {
  return (
    <li >
      <span style={item.packed?{textDecoration:"line-through"}:{}}>
        <input type="checkbox" value={item.packed} onChange={()=>{onToggleItems(item.id)}}/>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={()=>{onDeleteItems(item.id)}}>❌</button>
    </li>
  );
};

export default Item;

Item.propTypes = {
  onToggleItems:PropTypes.func.isRequired,
  onDeleteItems:PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }),
};
