// src/components/RemixButton.tsx
import { motion } from 'framer-motion';
import { remixClip } from '@/lib/remixEngine';

export default function RemixButton({ clipId, onRemix }: { clipId: string; onRemix: (variants: string[]) => void }) {
  const handleRemix = async () => {
    const variants = await remixClip(clipId);
    onRemix(variants); // Pass variants to parent component
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleRemix}
      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg shadow-md"
    >
      Remix This Clip
    </motion.button>
  );
}
