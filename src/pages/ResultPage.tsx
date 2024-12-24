import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AnsweredQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  isCorrect: boolean;
}

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Nhận dữ liệu từ state
  const { answers } = location.state as { answers: AnsweredQuestion[] };

  // Đếm số câu trả lời đúng
  const totalCorrect = answers.filter(
    (r) => r.selectedAnswer?.charAt(0) === r.correctAnswer.charAt(0)
  ).length;

  // Lọc ra các câu trả lời sai để hiển thị
  const incorrectAnswers = answers.filter(
    (r) => r.selectedAnswer?.charAt(0) !== r.correctAnswer.charAt(0)
  );

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold">Kết quả làm bài</h2>
      <p className="mt-4 text-lg">
        Bạn trả lời đúng <span className="font-bold">{totalCorrect}</span>/{answers.length} câu.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
      >
        Làm lại
      </button>
      {incorrectAnswers.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Các câu trả lời sai</h3>
          <ul className="mt-4 text-left space-y-4">
            {incorrectAnswers.map((result, index) => (
              <li key={index+0} className="p-4 border rounded-md bg-red-100">
                <p>
                  <strong>Câu {result.id}:</strong> {result.question}
                </p>
                <p>
                  <strong>Đáp án đúng:</strong> {result.correctAnswer}
                </p>
                <p>
                  <strong>Đáp án của bạn:</strong> {result.selectedAnswer ?? 'Chưa trả lời'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
