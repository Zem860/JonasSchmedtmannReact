import PropTypes from 'prop-types';
import Options from './Options';
const Question = ({ question, dispatch, answer }) => {
  return (
    <>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </>
  );
};

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.array,
  }),
  dispatch:PropTypes.func,
  answer: PropTypes.any,
};
