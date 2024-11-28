import PropTypes from 'prop-types';
const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: 'nextQuestion' });
        }}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: 'finished' });
        }}
      >
        Finished
      </button>
    );
};

export default NextButton;

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.any,
  index: PropTypes.number,
  numQuestions: PropTypes.number,
};
