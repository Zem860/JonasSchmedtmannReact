import PropTypes from 'prop-types';
const Item = ({ item }) => {
  return (
    <li >
      <span style={item.packed?{textDecoration:"line-through"}:{}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
  }),
};
