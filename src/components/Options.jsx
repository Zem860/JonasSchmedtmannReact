import PropTypes from 'prop-types';
const Options = ({ question,  dispatch, answer }) => {
  const hasAnswer = answer!==null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index===answer?"answer":''} ${hasAnswer?index === question.correctOption?'correct':'wrong':""}`}
          key={index}
          disabled={hasAnswer}
          onClick={() => {
            dispatch({ type: 'newAnswer', payload:index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
Options.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.array,
    correctOption:PropTypes.number,
  }),
  dispatch:PropTypes.func,
  answer:PropTypes.any,
};
