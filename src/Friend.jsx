import PropTypes from 'prop-types';
import Button from './Button';
const Friend = ({ friend, onSelection, selectedFriend }) => {
    const isSelected =  friend.id === selectedFriend?.id;
    //不這樣預設會報錯，因為一開始傳進來null會有問題，null的id是沒有的
    return (
    <li className={`${isSelected?'selected':''}`}>
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
      {friend.balance == 0 && <p>You are even.</p>}
      <Button onClick={()=>{onSelection(friend)}}>{isSelected?'Close':'Select'}</Button>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
onSelection:PropTypes.func.isRequired,

  friend: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,

  selectedFriend: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }),
};
