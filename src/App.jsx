import { useEffect, useState } from 'react';

function App() {
  async function getAdvice() {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    getAdvice()

  }, []);

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <Message count ={count} />
    </>
  );
}

function Message({count}){
  return (
    <p>
        You have read <strong>{count}</strong> advices
      </p>
  )
}

export default App;
