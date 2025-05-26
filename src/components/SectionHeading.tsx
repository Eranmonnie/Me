import React, { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`font-bold text-lg tracking-tight mb-2 ${className}`}>
      {children}
    </h2>
  );
}

export default SectionHeading;