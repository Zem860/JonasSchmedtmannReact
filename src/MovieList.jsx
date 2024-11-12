import Movie from "./Movie";
import PropTypes from "prop-types";
const MovieList = ({movies}) => {
    return (<ul className="list">
        {movies?.map((movie) => (
         <Movie key={movie.imdbID} movie={movie} />
        ))}
      </ul> );
}
 
export default MovieList;

MovieList.propTypes={
    movies:PropTypes.array.isRequired,
}