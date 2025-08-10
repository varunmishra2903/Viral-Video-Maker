// src/components/PublishButton.tsx
'use client';

import { useState } from 'react';
import { useInputStore } from '@/store/inputStore';

export default function PublishButton({ videoUrl, script }: { videoUrl: string; script: string }) {
  const { platforms } = useInputStore();
  const [status, setStatus] = useState('');

  const handlePublish = async () => {
    setStatus('Publishing...');
    const res = await fetch('/api/publish', {
      method: 'POST',
      body: JSON.stringify({ videoUrl, script, platforms }),
    });
    const data = await res.json();
    setStatus(`✅ Published to: ${data.results.map((r: { platform: string }) => r.platform).join(', ')}`);
  };

  return (
    <div className="mt-4">
      <button
        onClick={handlePublish}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        🚀 Publish
      </button>
      {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
    </div>
  );
}
