import { useState, useEffect } from "react";
export function useMovies(query, callback){
    const key = 'd90be5ab';

    const movieAPI = `http://www.omdbapi.com/?apikey=${key}&s=${query}`;
    const [movies, setMovies] = useState([]);
    // const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    
    useEffect(() => {
        const controller = new AbortController();
        callback?.();
    
        async function fetchMovies() {
          setIsLoading(true);
          setErr('');
          try {
            const res = await fetch(movieAPI, {signal:controller.signal});
            if (!res.ok) throw new Error('sth went wrong with fetching movie data');
    
            const data = await res.json();
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
        callback();
        fetchMovies();
    
        return ()=>{
          controller.abort();
        }
      }, [query]);

      return {movies, isLoading, err}
    
}