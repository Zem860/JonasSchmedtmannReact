import Steps from './Steps';
import StepMessage from './StepMessage';
// Reacts reacts to states; each components holds their own states. If components changed, react re-renders destroy the original component and re-render a new component. UI is a reflection of data changing over time.
const App = () => {
  return (
    <>
      <Steps />
      <StepMessage step={1}>
        <p>Fly</p>
        <p>Auroa Borilas</p>
        <p>✈️</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Fly</p>
        <p>Go BlizzardWorld</p>
        <p>😎</p>
      </StepMessage>
    </>
  );
};

export default App;
