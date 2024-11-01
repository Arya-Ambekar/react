import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a', // this is an anchor tag
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const AnotherElement = (
  <a href='hhtps://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "chai or react user"

const ReactElement2 = React.createElement(
  'a',  // tag
  { href: 'https://google.com', target: '_blank' },  // object of attributes
  'Click me to visit Google',  // text we want to display
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

  // <App />

  // <MyApp />
  
  // MyMap()    // if we do this, the code will execute without any error as MyApp is in reality a function 
                // and according to JS this is how we run the function. 
                // But we shouldn't do this because problem can be occur in 
                // optimization, our code convention or how other people are writing the code
  
  // <reactElement /> // There is no '<a>' tag in o/p, so we will think that 'r' of reactElement should be capital

  // <ReactElement /> // still there is no any o/p. we got following error:
  // main.jsx:31 Warning: React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object.
  // means it is expecting function or class, string but we are giving it an object..
  // it is same as we are saying "ReactElement()".

  // ReactElement // still cannot see the o/p

  // AnotherElement  // this works perfectly file

  ReactElement2   // this works perfectly file
)


// Every react uses a bundler. Like Bable, vite bhi apne aap me ek bundler he.
// The work of Bundler is to do magic behind the scene. like improving the syntax, upgrading the syntax
// The syntax we used in reactElement, the conversion of jsx into syntax is also done by the bundler