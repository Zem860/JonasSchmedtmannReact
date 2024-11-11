import { useState } from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!bill||!paidByUser)return 
    onSplitBill(whoIsPaying === 'user'?paidByFriend:-paidByUser)
   }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          if (!isNaN(Number(e.target.value))&&Number(e.target.value)>0){
            setBill(e.target.value)
          } else {
            setBill("");
          }
        }}
      />
      <label htmlFor="">Your expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) => {
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value),
          );
        }}
      />
      <label htmlFor=""> {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label htmlFor="">Who is paying the bill?</label>
      <select name="" id="" onChange={(e)=>{setWhoIsPaying(e.target.value)}}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;

FormSplitBill.propTypes = {
  onSplitBill:PropTypes.func.isRequired,
  selectedFriend: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }),
};
