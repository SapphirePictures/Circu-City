import React from 'react';

export const WireframeGlobe = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ perspective: '1000px' }}>
      <div className="relative w-full h-full [transform-style:preserve-3d] animate-[spin_20s_linear_infinite]">
         {/* Longitude Rings */}
         {[0, 45, 90, 135].map((deg) => (
           <div
             key={deg}
             className="absolute inset-0 rounded-full border-2 border-white/10"
             style={{ transform: `rotateY(${deg}deg)` }}
           />
         ))}
         
         {/* We need a specific equator that rotates? 
             Actually for a simple wireframe, just longitudes rotating looks like a spinning globe.
             Latitudes are usually horizontal circles. If they rotate with the sphere, they just spin in place (invisible rotation).
             So we can just add static latitude rings *outside* the rotation but *inside* the globe visual?
             No, if the sphere tilts, they matter. But for vertical axis rotation, latitudes are static visually.
         */}
      </div>
      
      {/* Static Latitudes (overlay) */}
       <div className="absolute inset-0 rounded-full border-2 border-white/10" />
       <div className="absolute inset-[12%] rounded-full border border-white/5" />
       <div className="absolute inset-[25%] rounded-full border border-white/5" />
       <div className="absolute inset-[37%] rounded-full border border-white/5" />
    </div>
  );
};
