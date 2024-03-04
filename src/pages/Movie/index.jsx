import { useParams } from 'react-router-dom';
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from 'react-icons/bs';

import { apiKey, formatCurrency, moviesUrl } from '../../utils/config';

import useFetchMovie from '../../hooks/useFetchMovie';

import MovieCard from '../../components/MovieCard';

import './styles.css';

const Movie = () => {
  const { id } = useParams();

  const movieUrl = `${moviesUrl}${id}?${apiKey}`;
  const movie = useFetchMovie(movieUrl);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
