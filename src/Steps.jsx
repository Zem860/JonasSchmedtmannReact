import { useState } from "react";

const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];
const Steps = () => {

    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
  
    function handlePrevious() {
      if (step > 1)
        setStep((curStep) => {
          return curStep - 1;
        });
    }
  
    function handleNext() {
      if (step < 3)
        setStep((curStep) => {
          return curStep + 1;
        });
    }
    return (
      <>
        <button
          className="close"
          onClick={() => {
            setIsOpen((is) => !is);
            //最好是這樣子去更新讓他return因為好像會有非同步的問題
          }}
        >
          &times;
        </button>
        {isOpen && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? 'active' : ''}>1</div>
              <div className={step >= 2 ? 'active' : ''}>2</div>
              <div className={step >= 3 ? 'active' : ''}>3</div>
            </div>
            <p className="message">
              Step {step}:{messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: '#7950f2', color: '#fff' }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: '#7950f2', color: '#fff' }}
                onClick={() => {
                  handleNext(); //這個是用在有參數的時候，平常用上面那個就好
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </>
    );
}
 
export default  Steps;