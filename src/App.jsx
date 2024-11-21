import { useEffect, useReducer } from 'react';
import Header from './Header';
const initialState = {
  questions: [],
  //'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        question: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status:'error'
      }
    default:
      throw new Error("the action is unknown")
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch('http://localhost:8080/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((error) => dispatch({type:'dataFailed'}));
  }, []);
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
