import { useState, useEffect } from 'react';
import Count from './Count';
function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date().toDateString();
  const [customizeDate, setCustomizaDate] = useState(today)

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + count);
    setCustomizaDate(date.toDateString());
  }, [count]);

  
  const handleSlide = (v) => {
    setStep(v)
  };

  const handleCount = (bool) => {

    if (bool) {
      setCount((c) => Number(c) + step);
    } else{
      setCount((c) => Number(c) - step);
    }
  };

  return (
    <div className="middle">
      <div>
        <Count text={'Step'} num={step} handleSlide={handleSlide} />
      </div>
      <div>
        <Count text={'Count'} num={count} handleCount={handleCount}  />
      </div>
      <div>

        {count} from today is {customizeDate}

      </div>
    </div>
  );
}

export default App;
