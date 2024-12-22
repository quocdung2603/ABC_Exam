import React from 'react';

interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onAnswer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">{question}</h3>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option, index) => (
          <li key={index+0}>
            <button
              onClick={() => onAnswer(option)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
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
