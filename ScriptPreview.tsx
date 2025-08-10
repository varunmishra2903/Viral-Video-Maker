"use client";

import { useState } from "react";
import VideoPreview from "./VideoPreview";

export default function ScriptPreview() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("meme");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);
    const res = await fetch("/api/generateScript", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, style }),
    });
    const data = await res.json();
    setScript(data.script);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Enter your video idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="meme">Meme</option>
        <option value="cinematic">Cinematic</option>
        <option value="educational">Educational</option>
      </select>
      <button
        onClick={generateScript}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded"
      >
        {loading ? "Generating..." : "Generate Script"}
      </button>
      {script && (
        <>
        <div className="p-4 mt-4 border rounded bg-gray-50 dark:bg-gray-900">
          <p className="text-lg font-mono whitespace-pre-wrap">{script}</p>
        </div>
        <VideoPreview script={script} />
        </>
      )}
    </div>
  );
}
