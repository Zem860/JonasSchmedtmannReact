import FriendList from './FriendList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';
import { initialFriends } from './data/data';
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show); //用這種return的方式改變他的值是比較正確的寫法
  };
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState(null);
  const handleAddFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    //一定要用copy，因為絕對不要更動原始資料
    setShowAddFriend(false);
  };
  const handleSelection = (friend) => {
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    //flip back and forth
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),


    );
    setSelectedFriends(null)
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriends}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}{' '}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      {selectedFriends && (
        <FormSplitBill
          selectedFriend={selectedFriends}
          onSplitBill={handleSplitBill}
          key={selectedFriends.id}
        />
      )}
    </div>
  );
}

export default App;
