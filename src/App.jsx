import NavBar from './NavBar';
import { useState } from 'react';
import MainBody from './MainBody';
import Search from './Search';
import NumResults from './NumResults';
import Box from './Box';
import Loader from './Loader';
import ErrorMsg from './Err';
import MovieList from './MovieList';
import Summary from './Summary';
import WatchedMovieList from './WatchedMovieList';
import MovieDetails from './MovieDetails';
import { useMovies } from './useMovies';
import { useLocalStorageState } from './useLocalStorage';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const [watched,setWatched] = useLocalStorageState([], "watched")
  // const [watched, setWatched] = useState(()=>{
  //   const storedValue = localStorage.getItem('watched')
  //   return JSON.parse(storedValue) 
  // });

  const handleDeleteWatched = (id)=>{
    setWatched(watched => watched?.filter(movie=>movie.imdbID!==id))
  }
  const handleSelectedMovie = (id)=>{
    setSelectedId(selectedId=>selectedId===id?null:id)
    
  }

  const handleClosedMovie = ()=>{
    setSelectedId(null)
  }

  const handleAddWatched = (mov)=>{
    setWatched(watched =>[...watched, mov]);
    // localStorage.setItem('watched', JSON.stringify([...watched, mov]))
  }

  const {movies, isLoading, err} = useMovies(query, handleClosedMovie)



  return (
    <>
      <NavBar movies={movies}>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <MainBody>
        <Box>
          {isLoading && <Loader />}
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
    </>
  );
}
