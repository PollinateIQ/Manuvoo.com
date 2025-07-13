import React from 'react';

interface ManuvooLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ManuvooLogo: React.FC<ManuvooLogoProps> = ({ 
  width = 40, 
  height = 40, 
  className = "" 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(50, 50)">
        {/* Shadow */}
        <g opacity="0.3" transform="translate(2, 2)">
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000"/>
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" transform="rotate(60)"/>
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" transform="rotate(-60)"/>
        </g>
        
        {/* Main hexagon */}
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" stroke="#fff" strokeWidth="2"/>
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" stroke="#fff" strokeWidth="2" transform="rotate(60)"/>
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" stroke="#fff" strokeWidth="2" transform="rotate(-60)"/>
        
        {/* Menu lines */}
        <rect x="-18" y="-15" width="36" height="4" rx="2" fill="#fff"/>
        <rect x="-11" y="-5" width="22" height="4" rx="2" fill="#fff"/>
        <rect x="-14" y="5" width="28" height="4" rx="2" fill="#fff"/>
        <rect x="-18" y="15" width="36" height="4" rx="2" fill="#fff"/>
      </g>
    </svg>
  );
}; 