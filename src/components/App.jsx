import { useEffect, useReducer } from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
const SECS_PER_QUESTIONS=30;
const initialState = {
  questions: [],
  //'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining:null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length*SECS_PER_QUESTIONS,
      };
    case 'newAnswer':
      // const question = state.questions.at(state.index);
      // console.log(state.index, state.questions[state.index].correctOption, action.payload, state.questions[state.index].points)
      console.log(
        action.payload,
        typeof state.questions[state.index].correctOption,
      );
      return {
        ...state,
        answer: action.payload,
        status: 'active',
        points:
          action.payload === state.questions[state.index].correctOption
            ? state.points + state.questions[state.index].points
            : state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finished':
      return {
        ...state,
        status: 'finish',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    case 'tick':
      return {
        ...state, secondsRemaining: state.secondsRemaining-1,
        status: state.secondsRemaining === 0? 'finish':state.status
      }
    default:
      throw new Error('the action is unknown');
  }
};

function App() {
  const [{ questions, status, index, answer, points, highScore, secondsRemaining }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (accu, question) => question.points + accu,
    0,
  );

  useEffect(() => {
    fetch('http://localhost:8080/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((error) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="app">
      <Header />
      <MainBody>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishScreen
            points={points}
            maxPossiblePoint={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </MainBody>
    </div>
  );
}

export default App;
