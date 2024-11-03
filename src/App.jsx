import Steps from './Steps';
// Reacts reacts to states; each components holds their own states. If components changed, react re-renders destroy the original component and re-render a new component. UI is a reflection of data changing over time.
const App = () => {
  return (
    <>
      <Steps />

      <Steps />
    </>
  );
};

export default App;
