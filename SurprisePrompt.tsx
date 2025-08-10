'use client';

import { generatePredictivePrompt } from '@/lib/trendRadar';
import { useInputStore } from '@/store/inputStore';

export default function SurprisePrompt() {
  const { setPrompt } = useInputStore();

  const handleSurprise = () => {
    const prompt = generatePredictivePrompt();
    setPrompt(prompt);
  };

  return (
    <button
      onClick={handleSurprise}
      className="mt-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
    >
      🎲 Surprise Me
    </button>
  );
}
