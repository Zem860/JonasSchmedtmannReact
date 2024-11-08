import FriendList from './FriendList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';
function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const handleShowAddFriend = ()=>{
    setShowAddFriend((show)=>!show) //用這種return的方式改變他的值是比較正確的寫法
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />} <Button onClick={handleShowAddFriend}>{showAddFriend?'Close':'Add Friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
