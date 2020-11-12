import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';

// // ACTION - Describes what you want to do. Function that returns an object with an action name (type)
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   };
// };

// // REDUCER - Describes how your actions transform the state into the next state. It checks which action you did and based on that it modifies the state. Function with actual action
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// };

// // STORE -> GLOBALIZED STATE
// const store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH - This is where we execute the action
// store.dispatch(increment());

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
