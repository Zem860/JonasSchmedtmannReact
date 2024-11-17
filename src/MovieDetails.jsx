import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import Loader from './Loader';

const key = 'd90be5ab';

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const movieAPI = `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');
  const allIds = watched?.map((movie) => movie.imdbID);
  const isWatched = allIds.indexOf(selectedId) != -1;
  const watchedUserRating =watched?.find(
    (movie) => movie.imdbID === selectedId,
  )?.imdbRating;
  // console.log(watched);
  // console.log(selectedId);
  // console.log(isWatched);

  useEffect(()=>{
    const callback = (e)=>{
      if (e.code === 'Escape'){
        onCloseMovie();
      }
    }
    document.addEventListener('keydown', callback)
    return ()=>{
      document.removeEventListener('keydown', callback);
    }
  },[onCloseMovie]) //how we handle keypress event in react[go back to DOM cuz we interact with DOM(outside)]
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
   useEffect(()=>{
    if (!title) return;
    document.title = `Movie | ${title}`

    return ()=>{document.title = 'usePopcorn'; console.log(`${title}`)}; //clean-up function //closure in JS
    //clean-up function runs when re-render and dismount
   },[title])
  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async () => {
      const res = await fetch(movieAPI);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovieDetails();
  }, [selectedId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>✨</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRate={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You already rated {watchedUserRating}</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  selectedId: PropTypes.string,
  onCloseMovie: PropTypes.func,
  watched: PropTypes.array,
  onAddWatched: PropTypes.func,
};
