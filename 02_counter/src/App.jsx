import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    // counter += 1;
    // setCounter(counter);
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert('Counter reached 20, Limit reached.')
    }
    // console.log('Clicked ', counter += 1);
  }

  const decrememtValue = () => {
    if (counter === 0) {
      alert('Counter reached 0, value cannot be negative.')
    } else {
      setCounter(counter - 1);
    }
  }
  
  return (
    <>
      <h1>Chai or react {counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={decrememtValue}
      >Decrement value {counter}</button>
    </>
  )
}

export default App
