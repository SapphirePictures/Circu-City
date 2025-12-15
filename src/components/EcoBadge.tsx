import React from 'react';
import { Leaf } from 'lucide-react';

interface EcoBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EcoBadge: React.FC<EcoBadgeProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 rounded-full ${sizes[size]} ${className}`}>
      <Leaf className={iconSizes[size]} />
      <span>Eco</span>
    </span>
  );
};
