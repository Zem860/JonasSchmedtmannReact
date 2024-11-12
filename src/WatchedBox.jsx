import { useState } from "react";
import Summary from "./Summary";
import { tempWatchedData } from "./data/movies";
import WatchedMovieList from "./WatchedMovieList";
// import PropTypes from "prop-types";


const WatchedBox = () => {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);

    return ( <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? '–' : '+'}
        </button>
        {isOpen2 && (
          <>

            <Summary watched={watched}/>
            <WatchedMovieList watched={watched} />
          </>
        )}
      </div> );
}
 
export default WatchedBox;

