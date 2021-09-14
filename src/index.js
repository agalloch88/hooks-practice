import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {

  const initialState = {
    message: "hi"
  }

  function reducer(state, action) {
    switch(action.type) {
      case "yell":
        return {
          message: `HEY! I JUST SAID ${state.message}!`
        }
      case "whisper":
        return {
          message: `excuse me, i just said ${state.message}.`
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type: "yell"})}>YELL</button>
      <button onClick={() => dispatch({type: "whisper"})}>whisper</button>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
