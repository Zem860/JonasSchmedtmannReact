import PropTypes from "prop-types";
const Progress = ({index, numQuestions, points, maxPossiblePoints, answer}) => {
  return <header className="progress">
    <progress max={numQuestions} value={index+Number(answer!==null)}/>
    <p>Question <strong>{index+1}</strong>/{numQuestions}</p>
    <p>{points}/{maxPossiblePoints}</p>
  </header>;
};

export default Progress;

Progress.propTypes = {
    index:PropTypes.number,
    numQuestions:PropTypes.number,
    points:PropTypes.number,
    maxPossiblePoints:PropTypes.number,
}