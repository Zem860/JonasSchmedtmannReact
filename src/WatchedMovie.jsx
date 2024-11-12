import PropTypes from "prop-types";
const WatchedMovie = ({movie}) => {
    return (         <li >
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </li> );
}
 
export default WatchedMovie;

WatchedMovie.propTypes={
    movie:PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Poster:
        PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        imdbRating: PropTypes.number.isRequired,
        userRating: PropTypes.number.isRequired,
    })
}