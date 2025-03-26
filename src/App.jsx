// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner'; // Create this component

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const BranchesPage = lazy(() => import('./pages/BranchesPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;