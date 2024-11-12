import PropTypes from "prop-types";
import WatchedMovie from "./WatchedMovie";
const WatchedMovieList = ({watched}) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie = {movie} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;

WatchedMovieList.propTypes={
    watched:PropTypes.array.isRequired,
}
