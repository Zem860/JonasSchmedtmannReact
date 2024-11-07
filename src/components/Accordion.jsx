import PropTypes from 'prop-types';
import AccordionItems from './AccordionItems';
const Accordion = ({data}) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems
          key={i}
          title={el.title}
          num={i}
          text={el.text}
        />
      ))}
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  