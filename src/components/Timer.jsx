import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="timer">
      {formatTime(mins)}:{formatTime(secs)}
    </div>
  );
};

export default Timer;

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
};
