import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import FilmList from './filmList';

const App = () => (
  <FilmList />
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
)