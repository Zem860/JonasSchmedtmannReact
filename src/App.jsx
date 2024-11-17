import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import MainBody from './MainBody';
// import { tempMovieData, tempWatchedData } from './data/movies';
import Search from './Search';
import NumResults from './NumResults';
import Box from './Box';
import Loader from './Loader';
import ErrorMsg from './Err';
import MovieList from './MovieList';
import Summary from './Summary';
import WatchedMovieList from './WatchedMovieList';
import MovieDetails from './MovieDetails';
const key = 'd90be5ab';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const movieAPI = `http://www.omdbapi.com/?apikey=${key}&s=${query}`;

  const handleDeleteWatched = (id)=>{
    setWatched(watched => watched?.filter(movie=>movie.imdbID!==id))
  }
  const handleSelectedMovie = (id)=>{
    // setSelectedId(id)
    setSelectedId(selectedId=>selectedId===id?null:id)
    
  }

  const handleClosedMovie = ()=>{
    setSelectedId(null)
  }

  const handleAddWatched = (mov)=>{
    // console.log(mov)
    setWatched(watched =>[...watched, mov])
  }


  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      setIsLoading(true);
      setErr('');
      try {
        const res = await fetch(movieAPI, {signal:controller.signal});
        if (!res.ok) throw new Error('sth went wrong with fetching movie data');

        const data = await res.json();
        // console.log(data);
        if (data.Response === 'False') throw new Error('Movie Not Found!');
        setMovies(data.Search);
        setIsLoading(false);
        setErr('');
      } catch (error) {
        if (error.name!=='AbortError'){
          setErr(error.message);
        }
        
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setErr('');
      return;
    }
    fetchMovies();

    return ()=>{
      controller.abort();
    }
  }, [query]);

  return (
    <>
      <NavBar movies={movies}>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <MainBody>
        {/* 可以在元件內使用element的方式去pass Props可是用children的結構上會比較清晰 */}
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <Summary watched={watched} />
              <WatchedMovieList watched={watched} />
            </>
          }
        /> */}
        <Box>
          {isLoading && <Loader />}
          {/* {isLoading? <Loader/>:<MovieList movies={movies} />} */}
          {!isLoading && !err && <MovieList movies={movies}  onSelectedMovie = {handleSelectedMovie}/>}
          {err && <ErrorMsg errMsg={err} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId} onCloseMovie = {handleClosedMovie} onAddWatched = {handleAddWatched} watched={watched}  />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList watched={watched} onDeletedWatched = {handleDeleteWatched} />
            </>
          )}
        </Box>
      </MainBody>
      {/* <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav> */}
    </>
  );
}
