import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import { imageUrl } from '../../utils/config';

import './styles.css';

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movies/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showLink: PropTypes.bool,
};

export default MovieCard;
