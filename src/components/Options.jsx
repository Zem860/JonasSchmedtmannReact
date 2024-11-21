import PropTypes from "prop-types";
const Options = ({question}) => {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button className="btn btn-option" key={index}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
Options.propTypes = {
    question:PropTypes.shape({
        question:PropTypes.string,
        options:PropTypes.array,
    })
}