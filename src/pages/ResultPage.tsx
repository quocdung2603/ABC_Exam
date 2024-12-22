import React from 'react';

interface ResultPageProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ score, totalQuestions, onRetry }) => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold">Kết quả</h2>
      <p className="mt-4 text-lg">
        Bạn trả lời đúng <span className="font-bold">{score}</span>/{totalQuestions} câu.
      </p>
      <button
        onClick={onRetry}
        className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Làm lại
      </button>
    </div>
  );
};

export default ResultPage;
