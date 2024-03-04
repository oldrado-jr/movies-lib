import { useEffect, useState } from 'react';

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    })();
  }, [url]);

  return movies;
};

export default useFetchMovies;
