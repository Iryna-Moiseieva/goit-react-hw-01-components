import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Рендерим App только в одном месте
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);