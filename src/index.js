import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';

// Рендерим App только в одном месте
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);