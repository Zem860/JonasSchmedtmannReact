import { useState,useEffect } from "react";
function App() {
  
  const [search,setSearch] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to,setTo] = useState('USD')
  const [output, setOutput] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    const controller = new AbortController();
    const api = `https://api.frankfurter.app/latest?amount=${search}&from=${from}&to=${to}`
    async function fetchCurrency(){
      if (search ===0||!search){
        setOutput(0)
        return;
      }
      // setIsLoading(true)
      const res = await fetch(api, {signal:controller.signal});
      const data = await res.json();
      console.log(data)
      setOutput(data.rates[to])
      // setIsLoading(false)
      
    }

    if (!from||!to) return;
    if (from === to){
      setOutput(search)
      return;
    }

    fetchCurrency()
    return ()=>{controller.abort()}
  },[search, from, to])

  return (
    <div>
    <input type="text" 
    // disabled={isLoading} 
    onChange={(e)=>{setSearch(e.target.value)}}/>
    <select value={from} 
    // disabled={isLoading} 
    onChange={(e)=>{setFrom(e.target.value)}}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
    <select value={to} 
    // disabled={isLoading}   
    onChange={(e)=>{setTo(e.target.value)}}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
    <p>{output} {to}</p>
  </div>
  );
}



export default App;
