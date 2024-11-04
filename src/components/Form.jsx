import { useState } from "react";

const Form = () => {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1);

    const handleSubmit =(e)=>{
        e.preventDefault()
        if (!description){
            return
        }
       const newItem = {description,quantity, packed:false, id:Date.now()}
        console.log(newItem);
        setDescription("")
        setQuantity(1)
    }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        {/* 可以直接這樣寫，event在click之後會自動pass進func */}
        {/* 可以坐在btn上面但是只會按btn有反應，我們會希望按下enter也有反應所以寫在form上面最快 */}
        <h3>What do you need for your trip😏?</h3>
        <select value = {quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
                {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder={description} onChange={(e)=>{setDescription(e.target.value)}} />
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
