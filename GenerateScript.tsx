import { useEffect } from 'react';
import { useInputStore } from '@/store/inputStore';

export default function GenerateScript() {
  const {
    prompt,
    style,
    platforms,
    setScript,
    setVideoUrl,
    script,
  } = useInputStore();

  useEffect(() => {
    if (!prompt || !style || platforms.length === 0 || script) return;

    // Simulate LLM script generation
    const generatedScript = `Here's a ${style.toLowerCase()} video script for: "${prompt}" targeting ${platforms.join(', ')}.`;

    // Simulate video URL stub
    const stubVideoUrl = 'https://example.com/video.mp4';

    setScript(generatedScript);
    setVideoUrl(stubVideoUrl);
  }, [prompt, style, platforms, script, setScript, setVideoUrl]);

  return null; // No UI needed
}
