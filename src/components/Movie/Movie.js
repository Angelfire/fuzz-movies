import React from 'react';
import { Link } from 'react-router-dom';
import { TMDB_IMAGE_URL } from '../../utils/consts';

import './movie.css';

const Movie = ({ movie }) => {
  const { poster_path, title } = movie;

  return (
    <div className="movie">
      <Link to={`details/${movie.id}`}>
        <img
          className="movie__poster"
          src={`${TMDB_IMAGE_URL}${poster_path}`}
          alt={`${title} poster`}
        />
      </Link>
      <div className="movie__title">
        <Link to={`details/${movie.id}`}>{ title }</Link>
      </div>
    </div>
  );
};

export default Movie;
