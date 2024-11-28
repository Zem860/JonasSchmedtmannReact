import PropTypes from 'prop-types';
const FinishScreen = ({ points, maxPossiblePoint, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoint) * 100;
  let emoji;
  if (percentage === 100) emoji = '😎';
  if (percentage >= 80 && percentage < 100) emoji = '😊';
  if (percentage >= 50 && percentage < 80) emoji = '😏';
  if (percentage > 0 && percentage < 50) emoji = '😢';

  return (
    <>
      {emoji}
      <p className="result">
        You scored {points} out of {maxPossiblePoint}({Math.ceil(percentage)})%
      </p>
      <p className='highscore'>Highscore: {highScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: 'restart' });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;

FinishScreen.propTypes = {
  points: PropTypes.number,
  maxPossiblePoint: PropTypes.number,
  highScore:PropTypes.number,
};
