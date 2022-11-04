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

  const Bg = () => {
    setCount(count + 1);
    if(count%4 === 0) {
     document.body.classList.add('dark-bg')
    } if(count%5 === 0) {
      // document.body.classList.remove('dark-bg')
    }
  }

  return (
    <div className='Counter'>
      <h1>Count is: {count}</h1>
      <h3>Age is: {age}</h3>
      <button onClick={Bg}>
        Increase
      </button>
    </div>
  )
}


ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);

