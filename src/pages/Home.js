import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Layout from '../components/shared/Layout/Layout';
import SearchBox from '../components/SearchBox/SearchBox';
import Movies from '../components/Movies/Movies';
import { MoviesContext } from '../contexts/MoviesP';

import '../styles/home.css';

const Home = () => {
  const { favorite } = useContext(MoviesContext);

  return (
    <>
      <Header />
      <Layout>
        <div className="home-container">
          <SearchBox />
          <Movies />
          { favorite.length > 0 
            && <Link
                className="home_container__favs"
                to="/favorites"
              >Favorite Movies</Link>
          }
        </div>
      </Layout>
    </>
  );
};

export default Home;
