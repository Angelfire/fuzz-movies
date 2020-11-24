import React, { createContext, useState } from 'react';

export const MoviesContext = createContext({});

export const MoviesP = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isErrorMovies, setIsErrorMovies] = useState(null);
  const [favorite, setFavorite] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
        favorite,
        isErrorMovies,
        isLoadingMovies,
        movies,
        setFavorite: movie => {
          setFavorite(state => {
            return [...state, { ...movie }]
          });
        },
        setIsErrorMovies,
        setIsLoadingMovies,
        setMovies
      }}
    >
      { children }
    </MoviesContext.Provider> 
  )
};

export default MoviesP;