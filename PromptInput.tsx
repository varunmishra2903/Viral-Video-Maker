'use client';

import { useState } from 'react';
import { useInputStore } from '@/store/inputStore';

export default function PromptInput() {
  const { setPrompt, setScript, setStyle, setPlatforms } = useInputStore();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setPrompt(input);

    const res = await fetch('/api/interpretPrompt', {
      method: 'POST',
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();

    setScript(data.script);
    setStyle(data.style);
    setPlatforms(data.platforms);
    setLoading(false);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Describe your video idea</label>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        className="w-full p-2 border rounded"
        placeholder="e.g. Make a cinematic recap of my weekend with trending music and meme overlays"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Thinking...' : 'Generate'}
      </button>
    </div>
  );
}
