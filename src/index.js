import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MoviesP from './contexts/MoviesP';

const AppProvider = () => (
  <MoviesP>
    <App />
  </MoviesP>
);

ReactDOM.render(<AppProvider />, document.getElementById('app'));
