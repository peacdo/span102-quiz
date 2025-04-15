'use client';

import { useState } from 'react';
import { Question, QuizState, sampleQuestions } from '@/types/quiz';

export default function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
    answers: [],
  });

  const currentQuestion = sampleQuestions[state.currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...state.answers, answer];
    const isCorrect = answer === currentQuestion.correctAnswer;

    setState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: newAnswers,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      showResults: prev.currentQuestionIndex === sampleQuestions.length - 1,
    }));
  };

  const resetQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      showResults: false,
      answers: [],
    });
  };

  if (state.showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Quiz Results</h2>
        <p className="text-xl text-center mb-4">
          You scored {state.score} out of {sampleQuestions.length}
        </p>
        <div className="flex justify-center">
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {state.currentQuestionIndex + 1} of {sampleQuestions.length}
          </span>
          <span className="text-sm text-gray-500">
            Score: {state.score}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
      </div>
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 