import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizHome from './pages/QuizHome';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizHome />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
