import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';

// Lazy loading des pages de démo pour optimiser les performances
const MindScape = lazy(() => import('./demos/MindScape'));
const Zenify = lazy(() => import('./demos/Zenify'));
const Aurora = lazy(() => import('./demos/Aurora'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/mindscape" element={<MindScape />} />
          <Route path="/zenify" element={<Zenify />} />
          <Route path="/aurora" element={<Aurora />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
