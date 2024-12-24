import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { shuffleArray } from '../utils/shuffle';
import { SampleData } from '../fakeData/data';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const QuizHome: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async (mode: 'all' | 'random' | 'random50') => {
    setLoading(true);
    try {
      const response: Question[] = SampleData;
      let questions = response;

      if (mode === 'random') {
        questions = shuffleArray(questions);
      } else if (mode === 'random50') {
        questions = shuffleArray(questions).slice(0, 50);
      }

      navigate('/quiz', { state: { questions } });
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-red-500 mb-8">ABC EXAMS</h1>
      <h1 className="text-3xl font-bold mb-8">Chọn chế độ làm bài</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => fetchQuestions('all')}
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          Toàn bộ câu hỏi
        </button>
        <button
          onClick={() => fetchQuestions('random')}
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
          disabled={loading}
        >
          Random tất cả
        </button>
        <button
          onClick={() => fetchQuestions('random50')}
          className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600"
          disabled={loading}
        >
          Random 50 câu hỏi
        </button>
      </div>
      {loading && <p className="mt-4 text-lg font-medium text-gray-700">Đang tải dữ liệu...</p>}
    </div>
  );
};

export default QuizHome;
