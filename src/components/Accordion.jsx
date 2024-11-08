import PropTypes from 'prop-types';
import AccordionItems from './AccordionItems';
import { useState } from 'react';

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(null);
  const HandleIsOpen = (num) => {
    isOpen===num?setIsOpen(null):setIsOpen(num);
    
  };

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems
          key={el.title}
          title={el.title}
          num={i}
          onSetOpen={HandleIsOpen}
          curOpen={isOpen}
        >
          {el.text}
        </AccordionItems>
      ))}

      <AccordionItems

        title='Mr. Robot'
        num={22}
        onSetOpen={HandleIsOpen}
        curOpen={isOpen}
      >
        <p>Best show Ever</p>
      </AccordionItems>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
