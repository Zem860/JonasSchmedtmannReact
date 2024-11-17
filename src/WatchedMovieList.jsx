import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";
const WatchedMovieList = ({watched, onDeletedWatched}) => {
  return (
    <ul className="list list-watched" >
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie = {movie} watched = {watched} onDeletedWatched={onDeletedWatched}/>
      ))}
    </ul>
  );
};

export default WatchedMovieList;

WatchedMovieList.propTypes={
    watched:PropTypes.array.isRequired,
    onDeletedWatched:PropTypes.func,
}
