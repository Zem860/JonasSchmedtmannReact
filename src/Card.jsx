import PropTypes from 'prop-types';

const Card = ({ question, clicked }) => {
  return (
    <>
      {question.id === clicked ? question.answer : question.question}
    </>
  );
};

export default Card;

Card.propTypes = {
  clicked: PropTypes.number.isRequired,
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }),
};
