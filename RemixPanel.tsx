import { useState } from "react";
import RemixButton from "./RemixButton";
import RemixGallery from "./RemixGallery";

// Optional modules (stubbed for now)
import HighlightExtractor from "./HighlightExtractor";
import TrendOverlay from "./TrendOverlay";
import FeedbackRanker from "./FeedbackRanker";
import ShareBar from "./ShareBar";

export default function RemixPanel({ clipId }: { clipId: string }) {
  const [variants, setVariants] = useState<string[]>([]);
  const [highlights, setHighlights] = useState<string[]>([]);
  const [enhanced, setEnhanced] = useState<string[]>([]);
  const [ranked, setRanked] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <RemixButton clipId={clipId} onRemix={setVariants} />

      {variants.length > 0 && (
        <>
          <HighlightExtractor variants={variants} onExtract={setHighlights} />
          <TrendOverlay highlights={highlights} onEnhance={setEnhanced} />
          <FeedbackRanker variants={enhanced.length ? enhanced : variants} onRank={setRanked} />
          <RemixGallery variants={ranked.length ? ranked : enhanced.length ? enhanced : variants} />
          <ShareBar variants={ranked.length ? ranked : enhanced.length ? enhanced : variants} />
        </>
      )}
    </div>
  );
}
