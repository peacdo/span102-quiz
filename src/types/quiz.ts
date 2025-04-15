export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  answers: string[];
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el pretérito de 'hablar' para 'yo'?",
    options: ["hablé", "hablaba", "hablo", "hablaré"],
    correctAnswer: "hablé",
    explanation: "The preterite form of 'hablar' for 'yo' is 'hablé'"
  },
  {
    id: 2,
    question: "¿Qué significa 'nevertheless' en español?",
    options: ["sin embargo", "además", "porque", "también"],
    correctAnswer: "sin embargo",
    explanation: "'Sin embargo' means 'nevertheless' or 'however' in English"
  },
  {
    id: 3,
    question: "¿Cuál es el imperfecto de 'ser' para 'tú'?",
    options: ["eras", "fuiste", "eres", "serás"],
    correctAnswer: "eras",
    explanation: "The imperfect form of 'ser' for 'tú' is 'eras'"
  }
]; 