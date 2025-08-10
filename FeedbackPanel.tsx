'use client';

import { useFeedbackStore } from '@/store/feedbackStore';
import { useFeedbackLoop } from '@/hooks/useFeedbackLoop';

export default function FeedbackPanel({ script }: { script: string }) {
  const { metrics, setMetrics } = useFeedbackStore();
  const { suggestRemix } = useFeedbackLoop(script);

  const simulateMetrics = () => {
    const mock = {
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 500),
      shares: Math.floor(Math.random() * 200),
    };
    setMetrics(mock);
  };

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">📊 Engagement Metrics</h3>
      <p>👀 Views: {metrics.views}</p>
      <p>❤️ Likes: {metrics.likes}</p>
      <p>🔁 Shares: {metrics.shares}</p>

      <button
        onClick={simulateMetrics}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        🔄 Simulate Feedback
      </button>

      <p className="mt-4 text-sm italic text-gray-700">💡 Suggestion: {suggestRemix()}</p>
    </div>
  );
}
