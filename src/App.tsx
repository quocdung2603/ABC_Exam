import React, { useState } from 'react';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

const App: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  const handleRetry = () => {
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <QuizPage
          onComplete={(finalScore, total) => {
            setScore(finalScore);
            setTotalQuestions(total);
            setShowResult(true);
          }}
        />
      ) : (
        <ResultPage
          score={score}
          totalQuestions={totalQuestions}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default App;
