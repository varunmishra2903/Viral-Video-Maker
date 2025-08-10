import RemixClip from './RemixClip';

export default function RemixGallery({ variants }: { variants: string[] }) {
  const overlayTexts = [
    "When AI edits better than you…",
    "POV: GPT made this viral",
    "🔥 Auto-remixed for max engagement",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {variants.map((url, i) => (
        <RemixClip key={i} variantUrl={url} overlayText={overlayTexts[i % overlayTexts.length]} />
      ))}
    </div>
  );
}
