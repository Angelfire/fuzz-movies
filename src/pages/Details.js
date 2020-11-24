import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/shared/Layout/Layout';
import MovieDetail from '../components/MovieDetail/MovieDetail';

const Details = () => {
  const { movieId } = useParams();

  return (
    <Layout>
      <MovieDetail movieId={ movieId } />
    </Layout>
  )
};

export default Details;