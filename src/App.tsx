import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateGame } from './components/CreateGame';
import { HomePage } from './components/HomePage';
import { GamePage } from './components/GamePage';
import { CategoryPage } from './components/CategoryPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ExplorePage } from './components/ExplorePage';
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
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;