import React from 'react';

interface QuestionCardProps {
  id: number;
  question: string;
  options: string[];
  selectedAnswer: string | null;
  onAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  options,
  selectedAnswer,
  onAnswer,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="lg:text-lg text-base font-bold mb-4">Câu {id}: {question}</h3>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option, index) => (
          <li key={index+0}>
            <button
              onClick={() => onAnswer(option)}
              className={`w-full py-2 px-4 rounded-md lg:text-lg text-base ${
                selectedAnswer === option
                  ? 'bg-blue-500 text-white' // Màu sắc đáp án được chọn
                  : 'bg-gray-300 text-black' // Màu sắc mặc định
              }`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
