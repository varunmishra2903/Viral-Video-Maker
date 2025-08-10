// src/components/PlatformSelector.tsx
'use client';
import { useInputStore } from '../store/inputStore';

const platforms = ['TikTok', 'YouTube Shorts', 'Instagram Reels'];

export default function PlatformSelector() {
  const { platforms: selected, setPlatforms } = useInputStore();

  const toggle = (platform: string) => {
    if (selected.includes(platform)) {
      setPlatforms(selected.filter((p) => p !== platform));
    } else {
      setPlatforms([...selected, platform]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Target Platforms</label>
      <div className="flex gap-2 flex-wrap">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => toggle(p)}
            className={`px-3 py-1 rounded-full border ${selected.includes(p) ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
