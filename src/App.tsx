import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateGame } from './components/CreateGame';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';
import { CategoryPage } from './components/CategoryPage';
import { Analytics } from './components/Analytics';

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;