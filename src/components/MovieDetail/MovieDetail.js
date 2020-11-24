import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddFavorite from '../AddFavorite/AddFavorite';
import { TMDB_API_KEY, TMDB_IMAGE_URL, TMDB_MOVIE_DETAILS } from '../../utils/consts';

import './moviedetails.css';

const MovieDetail = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState({});
  let history = useHistory();

  const fetchMovieDetails = async movieId => {
    try {
      const res = await fetch(
        `${TMDB_MOVIE_DETAILS}${movieId}?api_key=${TMDB_API_KEY}`
      );
      if (!res.ok) throw new Error('The resource you requested could not be found.');

      const results = await res.json();

      setMovieDetails(results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    history.goBack();
  };

  const { overview, poster_path, release_date, title } = movieDetails;

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <div className="movie-detail">
        <img
          className="movie-detail__poster"
          src={`${TMDB_IMAGE_URL}${poster_path}`}
          alt={`${title} poster`}
        />
        <button
          className="movie-detail__back"
          onClick={ handleClick }
        >X</button>
        <h2 className="movie-detail__title">{ title }</h2>
        <time className="movie-detail__info">{ release_date }</time>
        <p className="movie-detail__overview">{ overview }</p>
      </div>
      <AddFavorite movie={ movieDetails } />
    </>
  );
};

export default MovieDetail;