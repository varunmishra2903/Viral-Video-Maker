"use client";

import { useEffect, useState } from "react";
import PromptInput from "../components/PromptInput";
import StyleSelector from "../components/StyleSelector";
import PlatformSelector from "../components/PlatformSelector";
import ScriptPreview from "@/components/ScriptPreview";
import RemixPanel from "../components/RemixPanel"; // Already built
import { clips } from "../lib/clips"; // Your static clip list

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedClipId, setSelectedClipId] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-white dark:bg-black text-black dark:text-white">
      <main className="max-w-xl mx-auto space-y-8">
        {/* 🎬 Hour 0–2: Script Generator */}
        <h1 className="text-3xl font-bold text-center sm:text-left">
          🎬 Viral Video Maker
        </h1>

        <PromptInput />
        <StyleSelector />
        <PlatformSelector />

        <div className="pt-6 border-t">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ready to generate your script? Click next to preview your viral hook.
          </p>
        </div>

        <ScriptPreview />

        {/* 🎥 Hour 3–7: Remix Flow */}
        <div className="pt-10 border-t">
          <h2 className="text-xl font-semibold mb-4">Remix a Clip</h2>

          <div className="grid grid-cols-2 gap-4">
            {clips.map((clip) => (
              <div
                key={clip.id}
                className={`border rounded-lg p-4 cursor-pointer hover:shadow-md ${
                  selectedClipId === clip.id ? "border-blue-500" : ""
                }`}
                onClick={() => setSelectedClipId(clip.id)}
              >
                <img src={clip.thumbnail} alt={clip.title} className="rounded" />
                <h3 className="mt-2 font-semibold">{clip.title}</h3>
              </div>
            ))}
          </div>

          {selectedClipId && (
            <div className="mt-8">
              <RemixPanel clipId={selectedClipId} />
            </div>
          )}
        </div>
      </main>

      <footer className="mt-16 text-center text-xs text-gray-400">
        Built with Next.js, Tailwind, and ambition 🚀
      </footer>
    </div>
  );
}
