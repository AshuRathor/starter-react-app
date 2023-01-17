import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import TeamContext from './context/Team/TeamContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <TeamContext> */}
        <App />
    {/* </TeamContext> */}
  </React.StrictMode>
);



reportWebVitals();
