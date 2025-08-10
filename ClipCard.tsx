import { useState } from 'react';
import RemixButton from './RemixButton';
import RemixGallery from './RemixGallery';

export default function RemixPanel({ clip }: { clip: { id: string } }) {
  const [variants, setVariants] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <RemixButton clipId={clip.id} onRemix={setVariants} />
      {variants.length > 0 && <RemixGallery variants={variants} />}
    </div>
  );
}

