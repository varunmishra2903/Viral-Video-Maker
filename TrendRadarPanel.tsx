import { getTrendingPrompts } from '@/lib/trendRadar';

export default function TrendRadarPanel() {
  const trends = getTrendingPrompts();

  return (
    <div className="mt-6 p-4 border rounded bg-yellow-50">
      <h3 className="text-lg font-semibold mb-2">📈 AI Trend Radar</h3>
      <ul className="list-disc pl-5">
        {trends.map((t, i) => (
          <li key={i}>
            <strong>{t.keyword}</strong> ({t.category}) — 🔥 Velocity: {t.velocity}
          </li>
        ))}
      </ul>
    </div>
  );
}
