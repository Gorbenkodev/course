import React, {useState} from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);

  useEffect(() => {
    document.title = `Age is ${age} & count is ${count}`
  }, [count])


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