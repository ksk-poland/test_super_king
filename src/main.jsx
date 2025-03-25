import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n'; // Import i18n configuration
import { initAllAnimations } from './utils/animations.js';
import ErrorBoundary from './components/ErrorBoundary.jsx'; // Make sure the path is correct

// Initialize all animations and interactive features
initAllAnimations();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
);
