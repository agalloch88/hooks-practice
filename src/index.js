import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa";

// creates array of stars, value of which can be manipulated and changed

const createArray = (length) => [...Array(length)];

// function for each individual star. starts as gray, when chlicked onSelect fires and changes color to red

function Star({ selected = false, onSelect }) {
  return (
    <FaStar 
      color={selected ? "red" : "gray"}
      onClick={onSelect}  
    />
  );
}

function StarRating({ totalStars = 5 }) {
  // useState manages the selection and counting of stars and dynamically updates
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => 
        (<Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
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
