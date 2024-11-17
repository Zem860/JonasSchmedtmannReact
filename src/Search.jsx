// import { useState } from 'react';
import PropTypes from "prop-types";
const Search = ({query, setQuery}) => {

    return ( <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      /> );
}
 
export default Search;

Search.propTypes = {
  query:PropTypes.string,
  setQuery:PropTypes.func,
}