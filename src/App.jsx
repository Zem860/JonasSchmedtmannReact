import NavBar from './NavBar';
import { useState } from 'react';
import MainBody from './MainBody';
import { tempMovieData, tempWatchedData } from './data/movies';
import Search from './Search';
import NumResults from './NumResults';
import Box from './Box';
import WatchedBox from './WatchedBox';
import MovieList from './MovieList';
import Summary from './Summary';
import WatchedMovieList from './WatchedMovieList';
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar movies={movies}>
        <Search />
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
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedMovieList watched={watched} />
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
