import PropTypes from "prop-types";
const WatchedMovie = ({movie, onDeletedWatched}) => {
    return (         <li >
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
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
          <button className="btn-delete" onClick={()=>{
            onDeletedWatched(movie.imdbID)
          }}>X</button>
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
    }),
    onDeletedWatched:PropTypes.func,
}