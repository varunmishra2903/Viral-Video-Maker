import { useEffect } from "react";

export default function TrendOverlay({
  highlights,
  onEnhance,
}: {
  highlights: string[];
  onEnhance: (enhanced: string[]) => void;
}) {
  useEffect(() => {
    // Simulate adding trending overlays
    const enhanced = highlights.map((url) => url + "?trend=overlay");
    onEnhance(enhanced);
  }, [highlights]);

  return <div className="text-sm text-gray-500">Trend overlays applied ✅</div>;
}
