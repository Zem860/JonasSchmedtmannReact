import PropTypes from 'prop-types';
const Stats = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  if (!items.length) {
    return (
      <p className="stats">
        <em>adding some items to your packing list</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      {percentage === 100 ? (
        'You got everything ready to go✈️'
      ) : (
        <em>
          🤔You have {numItems} items on your list, and you already packed{' '}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;

Stats.propTypes = {
  items: PropTypes.array.isRequired,
};
