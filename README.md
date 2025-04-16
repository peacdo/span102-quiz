# SPAN 102 Quiz App

A simple quiz application to help study for SPAN 102 midterm. Built with Next.js and TypeScript.

## Features

- Multiple choice questions
- Immediate feedback
- Score tracking
- Clean, modern interface
- Mobile-friendly design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to start practicing!

## Adding More Questions

To add more questions, edit the `src/types/quiz.ts` file and add new questions to the `sampleQuestions` array following the existing format:

```typescript
{
  id: number,
  question: "Your question in Spanish",
  options: ["option1", "option2", "option3", "option4"],
  correctAnswer: "correct option",
  explanation: "Explanation of the answer"
}
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React
