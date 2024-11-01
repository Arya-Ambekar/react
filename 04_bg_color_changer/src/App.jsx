// ------------------------ my way: ------------------------

// import { useState } from 'react'
// import './App.css'
// import Button from './components/Button';

// function App() {
//   const [color, setColor] = useState('');

//   function changeBgColor(newColor) {
//     setColor(newColor);
//     document.body.style.backgroundColor = newColor;
//   }

//   return (
//     <div>
//       <Button color='Blue' btnText='Blue' handleClick={changeBgColor}/>
//       <Button color='Red' btnText='Red' handleClick={changeBgColor}/>
//       <Button color='Yellow' btnText='Yellow' handleClick={changeBgColor}/>
//       <Button color='Green' btnText='Green' handleClick={changeBgColor}/>
//       <Button handleClick={changeBgColor}/>
//     </div>
//   )
// }

// export default App


// ------------------------ chai aur code way: ------------------------

import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');


  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "red", color: "white"}}
          >
            Red
          </button>
          <button 
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "yellow"}}
          >
            Yellow
          </button>
          <button
          onClick={() => setColor("blue")} 
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "blue", color: "white"}}
          >
            Blue
          </button>
          <button 
          onClick={() => setColor("white")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "white"}}
          >
            White
          </button>
          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "green", color: "white"}}
          >
            Green
          </button>
          <button 
          onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "black", color: "white"}}
          >
            Black
          </button>
          <button 
          onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "gray", color: "white"}}
          >
            Gray
          </button>
          <button 
          onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "purple", color: "white"}}
          >
            Purple
          </button>
          <button 
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full shadow-lg border-solid border-2 border-black'
          style={{backgroundColor: "pink"}}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
