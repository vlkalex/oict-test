import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./i18nextInit";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,

  document.getElementById('root')
);
