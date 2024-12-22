import React, { useEffect, useState } from 'react';
import { shuffleArray } from '../utils/shuffle';
import QuestionCard from '../components/QuestionCard';
import { SampleData } from '../fakeData/data';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

const QuizPage: React.FC<{ onComplete: (score: number, total: number) => void }> = ({
  onComplete,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]); // Trạng thái đánh dấu

  useEffect(() => {
    const shuffledQuestions = shuffleArray(SampleData);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const toggleFlag = (index: number) => {
    if (flaggedQuestions.includes(index)) {
      setFlaggedQuestions(flaggedQuestions.filter((i) => i !== index)); // Bỏ đánh dấu
    } else {
      setFlaggedQuestions([...flaggedQuestions, index]); // Đánh dấu
    }
  };

  const handleFinish = () => {
    onComplete(score, questions.length);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Nội dung chi tiết câu hỏi */}
      <div className="flex-1 p-4">
        {questions.length > 0 && (
          <>
            <QuestionCard
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onAnswer={(answer) => handleAnswer(answer)}
            />
            <div className='flex flex-row w-full justify-between items-center mt-4'>
              <div className='mr-auto'>
                <button
                  onClick={() => toggleFlag(currentQuestionIndex)}
                  className={`px-4 py-2 rounded-md ${flaggedQuestions.includes(currentQuestionIndex)
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-300 text-black'
                    }`}
                >
                  {flaggedQuestions.includes(currentQuestionIndex)
                    ? 'Bỏ Cờ'
                    : 'Đặt Cờ'}
                </button>
              </div>
              <div className='flex flex-row ml-auto space-x-4'>
                <button
                  onClick={goToPreviousQuestion}
                  className="px-4 py-2 bg-gray-300 rounded-md text-black disabled:opacity-50"
                  disabled={currentQuestionIndex === 0}
                >
                  Trước
                </button>
                <button
                  onClick={goToNextQuestion}
                  className="px-4 py-2 bg-gray-300 rounded-md text-black disabled:opacity-50"
                  disabled={currentQuestionIndex === questions.length - 1}
                >
                  Tiếp
                </button>
              </div>
            </div>
            <button
              onClick={handleFinish}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Kết thúc làm bài
            </button>
          </>
        )}
      </div>

      {/* Danh sách câu hỏi */}
      <div className="w-full md:w-1/3 bg-gray-100 overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4">Danh sách câu hỏi</h2>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((_, index) => (
            <button
              key={index + 0}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`p-2 rounded ${answeredQuestions.includes(index) ? 'bg-green-400' : 'bg-gray-200'
                } ${flaggedQuestions.includes(index) ? 'ring-2 ring-yellow-500' : ''
                } ${currentQuestionIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
