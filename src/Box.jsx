import { useState } from "react";
import PropTypes from "prop-types";
const Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    return ( 
     <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? '–' : '+'}
        </button>
        {isOpen && (
            children
        )}
      </div>
    
 );
}
 
export default Box;


Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
