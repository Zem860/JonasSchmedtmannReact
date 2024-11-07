import { useState } from 'react';
import Button from './Button';
import StepMessage from './StepMessage';
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

          <StepMessage step={step}>
            {messages[step - 1]}{' '}
            <div className="buttons">
              <Button
                bgColor="cyan"
                textColor="black"
                onClick={() => {
                  alert('On my wayward son');
                }}
              >
                Adventure
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>🐳</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>🦭</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
