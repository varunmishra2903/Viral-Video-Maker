// src/components/RemixClip.tsx
import { motion } from 'framer-motion';

export default function RemixClip({ variantUrl, overlayText }: { variantUrl: string; overlayText: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl"
    >
      <video
        src={variantUrl}
        controls
        className="w-full h-auto rounded-lg"
      />

      {/* Meme Overlay */}
      <div className="absolute top-4 left-4 bg-black/60 px-3 py-2 rounded text-white text-lg font-bold drop-shadow-lg">
        {overlayText}
      </div>
    </motion.div>
  );
}
