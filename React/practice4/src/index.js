import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Api from './api';



const App = () => (
  <Api />
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
)