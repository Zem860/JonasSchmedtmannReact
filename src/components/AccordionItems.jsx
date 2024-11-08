import PropTypes from 'prop-types';

const AccordionItems = ({ num, title, onSetOpen, curOpen, children}) => {
  const isOpen = num === curOpen
  return (
    <div
      onClick={() => {
        onSetOpen(num);
      }}
      className={`item ${isOpen ?  'open':''}`}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '+' : '-'}</p>
      {isOpen ? <div className="content-box">{children}</div> : <></>}
    </div>
  );
};

export default AccordionItems;

AccordionItems.propTypes = {
  onSetOpen:PropTypes.func.isRequired,
  num: PropTypes.number,
  curOpen:PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
