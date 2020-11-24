import React, { useContext } from 'react';
import Movie from '../Movie/Movie';
import { MoviesContext } from '../../contexts/MoviesP';

import './movies.css';

const Movies = () => {
  const { movies } = useContext(MoviesContext);

  if (!movies || !movies.length) return null;

  return (
    <div className="movies-container">
      { movies.map(movie => <Movie key={ movie.id } movie={ movie } />) }
    </div>
  )
};

export default Movies;
