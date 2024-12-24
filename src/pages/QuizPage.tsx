import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

interface AnsweredQuestion {
  id: number;
  question: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  isCorrect: boolean;
}

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions: initialQuestions } = location.state as { questions: Question[] };

  const questions: Question[] = initialQuestions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]); // Lưu đáp án đã chọn
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]); // Lưu trạng thái câu hỏi được đặt cờ

  useEffect(() => {
    setAnswers(
      questions.map((q) => ({
        id: q.id,
        question: q.question,
        correctAnswer: q.answer,
        selectedAnswer: null,
        isCorrect: false,
      }))
    );
  }, [questions]);

  const handleAnswer = (selectedAnswer: string) => {
    const cleanSelectedAnswer = selectedAnswer.split('. ').slice(1).join('. ');
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = {
      ...updatedAnswers[currentQuestionIndex],
      selectedAnswer,
      isCorrect: cleanSelectedAnswer === questions[currentQuestionIndex].answer,
    };
    setAnswers(updatedAnswers);
  };

  const toggleFlag = (index: number) => {
    if (flaggedQuestions.includes(index)) {
      setFlaggedQuestions(flaggedQuestions.filter((i) => i !== index));
    } else {
      setFlaggedQuestions([...flaggedQuestions, index]);
    }
  };

  const handleFinish = () => {
    navigate('/result', { state: { answers } });
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

  const answerLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Nội dung chi tiết câu hỏi */}
      <div className="flex-1 p-4">
        {questions.length > 0 && (
          <>
            <QuestionCard
              id={questions[currentQuestionIndex].id}
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options.map(
                (option, idx) => `${answerLabels[idx]}. ${option}`
              )}
              onAnswer={(answer) => handleAnswer(answer)}
              selectedAnswer={answers[currentQuestionIndex]?.selectedAnswer}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => toggleFlag(currentQuestionIndex)}
                className={`px-4 py-2 rounded-md font-medium ${
                  flaggedQuestions.includes(currentQuestionIndex)
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {flaggedQuestions.includes(currentQuestionIndex) ? 'Bỏ cờ' : 'Đặt cờ'}
              </button>
              <div className="flex space-x-4">
                <button
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-md font-medium bg-gray-300 text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Câu trước
                </button>
                <button
                  onClick={goToNextQuestion}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="px-4 py-2 rounded-md font-medium bg-gray-300 text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Câu kế tiếp
                </button>
              </div>
            </div>
            <button
              onClick={handleFinish}
              className="mt-4 w-full py-2 rounded-md font-medium bg-red-500 text-white hover:bg-red-600"
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
              key={index+0}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`p-2 rounded-md text-center text-white font-medium transition-all ${
                currentQuestionIndex === index
                  ? 'bg-blue-500'
                  : answers[index]?.selectedAnswer
                  ? 'bg-green-500'
                  : 'bg-gray-400'
              } ${
                flaggedQuestions.includes(index) ? 'ring-2 ring-yellow-500' : ''
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
