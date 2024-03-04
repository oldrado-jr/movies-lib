import { apiKey, moviesUrl } from '../../utils/config';

import useFetchMovies from '../../hooks/useFetchMovies';

import MovieCard from '../../components/MovieCard';

import '../MovieGrid.css';

const Home = () => {
  const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
  const topMovies = useFetchMovies(topRatedUrl);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
