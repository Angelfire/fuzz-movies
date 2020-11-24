import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import Layout from '../components/shared/Layout/Layout';

import '../styles/favorites.css';

const Favorites = () => {
  return (
    <Layout>
      <div className="favorite-container">
        <h2>Favorite Movies</h2>
        <FavoriteMovies />
      </div>
    </Layout>
  );
};

export default Favorites;
