import React, { useContext, useState } from 'react';
import { TMDB_API_KEY, TMDB_MOVIE } from '../../utils/consts';
import { MoviesContext } from '../../contexts/MoviesP';

import './searchbox.css';

const SearchBox = () => {
  const { setIsErrorMovies, setMovies } = useContext(MoviesContext)

  const [query, setQuery] = useState('');
  
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const url = `${TMDB_MOVIE}?api_key=${TMDB_API_KEY}&query=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (e) {
      setIsErrorMovies(e);
    }
  };

  return (
    <div className="searchbox-container">
      <form className="sb-form" onSubmit={ handleSubmit }>
        <input
          className="sb-form__search"
          onChange={ handleChange }
          placeholder="i.e. Back to the Future"
          type="text"
          value={ query }
        />
        <button className="sb-form__btn" type="submit">
          search
        </button>
      </form>
    </div>
  )
};

export default SearchBox;
