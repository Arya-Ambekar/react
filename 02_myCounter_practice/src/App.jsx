import { useState } from 'react'
import './App.css'

function App() {

  // let count = 0;   // using this simple variable will change the value of counter but it will not be changed or seen on the UI.

  // The issue is that the count variable is not causing a re-render of the component when it changes. 
  // React doesn't track normal variables for state updates. 
  // To fix this, you need to use React's useState hook to manage count as state. 
  // When state changes, React automatically re-renders the component to reflect the updated value in the UI.

  const [count, setCount] = useState(0); 
  
  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={incrementCount}>Increment count</button>
      <br />
      <br />
      <button onClick={decrementCount}>Decrement count</button>
    </>
  )
}

export default App
