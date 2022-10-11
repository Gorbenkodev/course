import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './style.css'
import { App } from './app.js'


export const Counter = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);

  useEffect(() => {
    document.title = `Age is ${age} & count is ${count}`
  }, [])


  return (
    <div className='Counter'>
      <h1>Count is: {count}</h1>
      <h3>Age is: {age}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}


ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);

