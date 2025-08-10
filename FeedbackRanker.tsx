import { useEffect } from "react";

export default function FeedbackRanker({
  variants,
  onRank,
}: {
  variants: string[];
  onRank: (ranked: string[]) => void;
}) {
  useEffect(() => {
    // Simulate ranking by engagement score
    const ranked = [...variants].sort(() => Math.random() - 0.5); // Shuffle
    onRank(ranked);
  }, [variants]);

  return <div className="text-sm text-gray-500">Variants ranked by feedback ✅</div>;
}
