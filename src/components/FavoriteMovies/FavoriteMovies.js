import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Movie from '../Movie/Movie';
import { MoviesContext } from '../../contexts/MoviesP';

import './favoritemovie.css';

const FavoriteMovies = () => {
  const { favorite } = useContext(MoviesContext);
  let history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="fv-container">
      <button
        className="fv-container__back"
        onClick={ handleClick } 
      >
        X
      </button>
      { favorite.map(movie => <Movie key={ movie.id } movie={ movie } />) }
    </div>
  );
};

export default FavoriteMovies;
