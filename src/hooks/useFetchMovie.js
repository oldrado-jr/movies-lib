import { useEffect, useState } from 'react';

const useFetchMovie = (url) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      setMovie(data);
    })();
  }, [url]);

  return movie;
};

export default useFetchMovie;
