import { useSearchParams } from 'react-router-dom';

import { apiKey, searchUrl } from '../../utils/config';

import useFetchMovies from '../../hooks/useFetchMovies';

import MovieCard from '../../components/MovieCard';

import '../MovieGrid.css';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
  const movies = useFetchMovies(searchWithQueryUrl);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
