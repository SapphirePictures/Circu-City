import { motion } from 'motion/react';

export function GlobeAnimated({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <circle cx="50" cy="50" r="48" />
        
        {/* "Latitudes" and "Longitudes" forming a sphere mesh */}
        <ellipse cx="50" cy="50" rx="48" ry="15" />
        <ellipse cx="50" cy="50" rx="48" ry="30" />
        <ellipse cx="50" cy="50" rx="48" ry="45" />
        
        <ellipse cx="50" cy="50" rx="15" ry="48" />
        <ellipse cx="50" cy="50" rx="30" ry="48" />
        <ellipse cx="50" cy="50" rx="45" ry="48" />

        {/* Rotated variations for density */}
        <ellipse cx="50" cy="50" rx="48" ry="22" transform="rotate(45 50 50)" />
        <ellipse cx="50" cy="50" rx="22" ry="48" transform="rotate(45 50 50)" />
        
        <ellipse cx="50" cy="50" rx="48" ry="22" transform="rotate(135 50 50)" />
        <ellipse cx="50" cy="50" rx="22" ry="48" transform="rotate(135 50 50)" />
      </motion.svg>
    </div>
  );
}
