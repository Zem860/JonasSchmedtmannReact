import Friend from './Friend';
import PropTypes from 'prop-types';
const FriendList = ({friends, onSelection,selectedFriend}) => {
  return (
    <ul>
      {friends.map((friend) => 
            <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelection={onSelection} />
      )}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes={
    selectedFriend:PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      }),
    friends: PropTypes.array.isRequired,
    onSelection:PropTypes.func.isRequired,
}