"use client";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPreview({ script }: { script: string }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateVideo = async () => {
    setLoading(true);
    const res = await fetch("/api/generateVideo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ script, platform: "tiktok" }),
    });
    const data = await res.json();
    setVideoUrl(data.videoUrl);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generateVideo}
        disabled={loading}
        className="px-4 py-2 bg-black text-white rounded"
      >
        {loading ? "Generating Video..." : "Generate Video"}
      </button>

      {videoUrl && (
        <div className="aspect-[9/16] w-full max-w-sm mx-auto border rounded overflow-hidden">
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            playing
          />
        </div>
      )}
    </div>
  );
}
