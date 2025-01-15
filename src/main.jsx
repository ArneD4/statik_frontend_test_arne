import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.scss';
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

const Main = () => {


  return (
    <App />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);