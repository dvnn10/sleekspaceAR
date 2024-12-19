import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Enhanced workaround for ResizeObserver Error
const observerErrorFix = () => {
  const originalResizeObserver = window.ResizeObserver;

  window.ResizeObserver = class extends originalResizeObserver {
    constructor(callback) {
      super((entries, observer) => {
        requestAnimationFrame(() => {
          try {
            callback(entries, observer);
          } catch (error) {
            console.warn("ResizeObserver loop error suppressed:", error);
          }
        });
      });
    }
  };
};

observerErrorFix();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);