import Button from './Button';
const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split bill with x</h2>
      <label htmlFor="">Bill value</label>
      <input type="text" />
      <label htmlFor="">Your expenses</label>
      <input type="text" />
      <label htmlFor="">X's expense</label>
      <input type="text" disabled />
      <label htmlFor="">Who is paying the bill?</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
