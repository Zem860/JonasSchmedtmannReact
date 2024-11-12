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


Box.propTypes={
    children:PropTypes.shape({    movie:PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster:
        PropTypes.string.isRequired,

    })})
}