import PropTypes from 'prop-types';
import Button from './Button';
const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} /> <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name}
          {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}€
        </p>
      )}
      {friend.balance == 0 && (
        <p>
          You are even.
        </p>
      )}
      <Button >Select</Button>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
};
