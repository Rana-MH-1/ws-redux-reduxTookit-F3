import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import { Provider } from 'react-redux';
//import { Store } from './Redux/Store';
import App2 from './App2';
import { Store2 } from './Redux2/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store2}>
    <App2 />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
