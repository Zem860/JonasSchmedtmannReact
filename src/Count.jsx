import PropTypes from 'prop-types';

const Count = ({ text, num, handleCount, handleSlide}) => {
  return (
    <>
      {text === 'Step' ? (
        <div style={{display:'flex'}}>
        <input type="range" min="1" max="10" value={num} onChange={(e)=>{handleSlide(Number(e.target.value))}}  />
        <p>{num}</p>
        </div>
    ) : (
        <>
          <button onClick={() => handleCount(true)}>+</button>
          {`${text}: ${num}`}
          <button onClick={() => handleCount(false)}>-</button>
        </>
      )}
    </>
  );
};

Count.propTypes = {
    handleSlide:PropTypes.func.isRequired,
    handleCount:PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  handle: PropTypes.func.isRequired,
};

export default Count;
