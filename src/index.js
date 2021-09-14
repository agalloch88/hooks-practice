import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {

  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input 
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
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
