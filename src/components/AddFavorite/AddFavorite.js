import React, { useContext } from 'react';
import { MoviesContext } from '../../contexts/MoviesP';

import './addfavorite.css';

const AddFavorite = ({ movie }) => {
  const { setFavorite } = useContext(MoviesContext);

  const handleClick = () => {
    setFavorite(movie);
  };

  return (
    <button
      className="add-favorite"
      onClick={ handleClick }
    >
      add to favorites
    </button>
  )
};

export default AddFavorite;
