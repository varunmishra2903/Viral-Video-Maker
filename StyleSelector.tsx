// src/components/StyleSelector.tsx
'use client';
import { useInputStore } from '../store/inputStore';

const styles = ['meme', 'cinematic', 'explainer', 'surreal'];

export default function StyleSelector() {
  const { style, setStyle } = useInputStore();

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Choose Style</label>
      <div className="flex gap-2">
        {styles.map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-3 py-1 rounded border ${style === s ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
