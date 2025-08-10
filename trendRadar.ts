type Trend = {
  keyword: string;
  velocity: number; // 0–100 scale
  category: 'style' | 'topic' | 'hook';
};

export function getTrendingPrompts(): Trend[] {
  // Mocked trends — later replace with Google Trends or TikTok Creative Center
  return [
    { keyword: 'cinematic recap', velocity: 92, category: 'style' },
    { keyword: 'AI girlfriend', velocity: 88, category: 'topic' },
    { keyword: 'What if...', velocity: 81, category: 'hook' },
    { keyword: 'day in the life', velocity: 76, category: 'style' },
    { keyword: 'unexpected twist', velocity: 73, category: 'hook' },
  ];
}

export function generatePredictivePrompt(): string {
  const trends = getTrendingPrompts();
  const top = trends.sort((a, b) => b.velocity - a.velocity)[0];

  return `Make a ${top.keyword} video with a twist — keep it short and punchy.`;
}
