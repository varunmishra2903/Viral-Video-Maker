import { useEffect } from "react";

export default function HighlightExtractor({
  videoUrl,
  onExtract,
}: {
  videoUrl: string;
  onExtract: (highlights: string[]) => void;
}) {
  useEffect(() => {
    // Simulate highlight extraction
    const highlights = [videoUrl + "?highlight=1", videoUrl + "?highlight=2"];
    onExtract(highlights);
  }, [videoUrl]);

  return <div className="text-sm text-gray-500">Highlights extracted ✅</div>;
}
