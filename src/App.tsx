import React, { useState } from 'react';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

interface AnsweredQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  isCorrect: boolean;
}

const App: React.FC = () => {
  const [results, setResults] = useState<AnsweredQuestion[] | null>(null);

  const handleRetry = () => {
    setResults(null); // Reset kết quả
  };

  return (
    <div>
      {results ? (
        <ResultPage results={results} onRetry={handleRetry} />
      ) : (
        <QuizPage onComplete={setResults} />
      )}
    </div>
  );
};

export default App;
