import React from 'react';
import ReactDOM from 'react-dom/client'; // Убедитесь, что импортируете из 'react-dom/client'
import App from './App';
import './index.css'; // Убедитесь, что этот файл существует
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
