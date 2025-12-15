import React from 'react';
import { Cloud } from 'lucide-react';

interface CO2SavedIndicatorProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export const CO2SavedIndicator: React.FC<CO2SavedIndicatorProps> = ({ 
  amount, 
  size = 'md', 
  showIcon = true,
  className = '' 
}) => {
  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 text-emerald-600 ${sizes[size]} ${className}`}>
      {showIcon && <Cloud className={iconSizes[size]} />}
      <span>{amount.toFixed(1)} kg CO₂</span>
    </span>
  );
};
