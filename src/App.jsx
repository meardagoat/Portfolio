import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import MindScape from './demos/MindScape';
import Zenify from './demos/Zenify';
import Aurora from './demos/Aurora';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/mindscape" element={<MindScape />} />
        <Route path="/zenify" element={<Zenify />} />
        <Route path="/aurora" element={<Aurora />} />
      </Routes>
    </Router>
  );
}

export default App;
