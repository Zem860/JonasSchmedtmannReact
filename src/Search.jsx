import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
const Search = ({query, setQuery}) => {
  const InputEl = useRef(null)
  
  useEffect(()=>{
    const callback =(e)=>{
      if (e.code ==="Enter"){
        if (document.activeElement === InputEl.current) return;
        InputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback)

    InputEl.current.focus();
    return ()=> document.removeEventListener('keydown', callback)
  },[setQuery]) //ref only get added the dom element after dom is loaded

    return ( <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref = {InputEl}
      /> );
}
 
export default Search;

Search.propTypes = {
  query:PropTypes.string,
  setQuery:PropTypes.func,
}