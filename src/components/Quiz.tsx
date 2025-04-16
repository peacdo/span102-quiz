'use client';

import { useState } from 'react';
import { Question, QuizState, sampleQuestions } from '@/types/quiz';

interface AnswerFeedback {
  isCorrect: boolean;
  explanation: string;
  selectedAnswer: string;
}

export default function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
    answers: [],
  });
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    yourAnswer: string;
    correctAnswer: string;
    explanation: string;
  }>>([]);

  const currentQuestion: Question = sampleQuestions[state.currentQuestionIndex];
  const progress = (state.currentQuestionIndex / sampleQuestions.length) * 100;

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    const newAnswers = [...state.answers, answer];
    
    if (!isCorrect) {
      setIncorrectAnswers([...incorrectAnswers, {
        question: currentQuestion.question,
        yourAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        explanation: currentQuestion.explanation || ''
      }]);
    }

    setFeedback({
      isCorrect,
      explanation: currentQuestion.explanation || '',
      selectedAnswer: answer
    });

    // Wait for 1.5 seconds before moving to next question
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        showResults: prev.currentQuestionIndex === sampleQuestions.length - 1,
      }));
      setFeedback(null);
    }, 1500);
  };

  const resetQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      showResults: false,
      answers: [],
    });
    setIncorrectAnswers([]);
    setFeedback(null);
  };

  const calculateTopicPerformance = () => {
    const topics = {
      'Gustar with Nouns': [1, 2, 3, 7, 9],
      'Food Vocabulary': [4, 5, 6, 8, 25, 26, 27],
      'Complex Gustar': Array.from({length: 9}, (_, i) => i + 10),
      'Encantar Usage': [19, 20, 21],
      'Basic Verb Conjugations': [22, 23, 24],
      'Irregular Verbs': [28, 33, 35], // hacer, poner, decir
      'Common Verbs': [29, 30, 31, 32, 34, 36, 37] // tener, venir, querer, poder, salir, ver, dormir
    };

    return Object.entries(topics).map(([topic, questionIds]) => {
      const topicQuestions = questionIds.length;
      const correctAnswers = questionIds.filter(id => 
        !incorrectAnswers.some(wrong => 
          sampleQuestions[id - 1].question === wrong.question
        )
      ).length;
      
      return {
        topic,
        percentage: Math.round((correctAnswers / topicQuestions) * 100)
      };
    });
  };

  if (state.showResults) {
    const topicPerformance = calculateTopicPerformance();
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Quiz Results</h2>
        
        {/* Overall Score */}
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {Math.round((state.score / sampleQuestions.length) * 100)}%
          </div>
          <p className="text-gray-600">
            You scored {state.score} out of {sampleQuestions.length} questions
          </p>
        </div>

        {/* Topic Performance */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance by Topic</h3>
          {topicPerformance.map(({topic, percentage}) => (
            <div key={topic} className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{topic}</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Incorrect Answers Review */}
        {incorrectAnswers.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Incorrect Answers</h3>
            <div className="space-y-4">
              {incorrectAnswers.map((wrong, index) => (
                <div key={index} className="border border-red-100 rounded-lg p-4 bg-red-50">
                  <p className="font-medium text-gray-800">{wrong.question}</p>
                  <p className="text-red-500">Your answer: {wrong.yourAnswer}</p>
                  <p className="text-green-500">Correct answer: {wrong.correctAnswer}</p>
                  <p className="text-gray-600 text-sm mt-2">{wrong.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center pt-6">
          <button
            onClick={resetQuiz}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Question {state.currentQuestionIndex + 1} of {sampleQuestions.length}
          </span>
          <span className="text-sm font-medium text-blue-600">
            Score: {state.score}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{currentQuestion.question}</h2>
      </div>

      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => {
          let buttonStyle = "w-full text-left px-6 py-4 rounded-lg border transition-all duration-200 ";
          
          if (feedback) {
            if (option === feedback.selectedAnswer) {
              buttonStyle += feedback.isCorrect 
                ? "border-green-500 bg-green-50 text-green-700" 
                : "border-red-500 bg-red-50 text-red-700";
            } else if (option === currentQuestion.correctAnswer && !feedback.isCorrect) {
              buttonStyle += "border-green-500 bg-green-50 text-green-700";
            } else {
              buttonStyle += "border-gray-200 bg-white text-gray-500 opacity-50";
            }
          } else {
            buttonStyle += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700";
          }

          return (
            <button
              key={index}
              onClick={() => !feedback && handleAnswer(option)}
              disabled={!!feedback}
              className={buttonStyle}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Answer Feedback */}
      {feedback && (
        <div className={`mt-6 p-4 rounded-lg ${
          feedback.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <p className={`font-medium ${
            feedback.isCorrect ? 'text-green-800' : 'text-red-800'
          }`}>
            {feedback.isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
          </p>
          <p className="text-gray-600 mt-1">{feedback.explanation}</p>
        </div>
      )}
    </div>
  );
} 