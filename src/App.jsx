import { useState } from 'react';
import Count from './Count';
function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const today = new Date().toDateString();
  const [customizeDate, setCustomizaDate] = useState(today)


  const handleDate = ()=>{
    const date = new Date();

    date.setDate(date.getDate()+count)

    setCustomizaDate(date.toDateString())
  }

  
  const handleStep = (bool) => {
    if (bool) {
      setStep((s) => s + 1);
    } else{
      setStep((s) => s - 1);
    }
  };

  const handleCount = (bool) => {


    if (bool) {
      setCount((c) => c + 1);
    } else{
      setCount((c) => c - 1);
    }

    handleDate()
   
  };

  return (
    <div className="middle">
      <div>
        <Count text={'Step'} num={step} handle={handleStep} />
      </div>
      <div>
        <Count text={'Count'} num={count} handle={handleCount}  />
      </div>
      <div>

        {count} from today is {customizeDate}

      </div>
    </div>
  );
}

export default App;
