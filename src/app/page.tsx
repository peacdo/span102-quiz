import Quiz from '@/components/Quiz';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          SPAN 102 Quiz Practice
        </h1>
        <Quiz />
      </div>
    </main>
  );
}
