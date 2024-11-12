import { useState } from 'react';
import PropTypes from 'prop-types';
import Star from './Rating/Star';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
};

const textStyle = {
  lineHeight: '0',
  margin: '0',
};

//放到外面可以避免re-render的時候的資源浪費(不用每次都建立這個物件)

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  const handleRating = (rating) => {
    setRating(rating);
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating? tempRating>=i+1:rating >= i + 1}
            onRate={() => {
              handleRating(i + 1);
            }}
            onHoverIn = {()=>{setTempRating(i+1)}}
            onHoverOut = {()=>{setTempRating(0)}}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  maxRating: PropTypes.number,
};
