import PropTypes from 'prop-types';
import { useState } from 'react';

const AccordionItems = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const HandleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={() => {
        HandleIsOpen();
      }}
      className={`item ${isOpen ?  'open':''}`}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '+' : '-'}</p>
      {isOpen ? <div className="content-box">{text}</div> : <></>}
    </div>
  );
};

export default AccordionItems;

AccordionItems.propTypes = {
  num: PropTypes.number,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
