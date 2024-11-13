import PropTypes from 'prop-types';
import { useState } from 'react';
const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  expanded = false,
  className,
  children,
  buttonColor,
}) => {
  const [expand, setExpand] = useState(expanded);

  return (
    <div className={className}>
      {expand
        ? children
        : String(children).split(" ").slice(0,collapsedNumWords).join(" ")+"..."}

      <button
        style={{ border: 'none', background: 'transparent' }}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <span style={{ color: buttonColor }}>
          {expand ? collapseButtonText : expandButtonText}
        </span>
      </button>
    </div>
  );
};

export default TextExpander;

TextExpander.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expanded: PropTypes.bool,
  expandButtonText: PropTypes.string,
  collapseButtonText:PropTypes.string,
  buttonColor: PropTypes.string,
};
