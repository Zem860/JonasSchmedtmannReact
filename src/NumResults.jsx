import PropTypes from 'prop-types';
const NumResults = ({movies}) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
};

export default NumResults;
NumResults.propTypes = {
    movies: PropTypes.array,
  };
  