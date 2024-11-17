import Movie from "./Movie";
import PropTypes from "prop-types";
const MovieList = ({movies, onSelectedMovie}) => {
    return (<ul className="list">
        {movies?.map((movie) => (
         <Movie key={movie.imdbID} movie={movie} onSelectedMovie = {onSelectedMovie}/>
        ))}
      </ul> );
}
 
export default MovieList;

MovieList.propTypes={
    movies:PropTypes.array,
    onSelectedMovie:PropTypes.func,
}