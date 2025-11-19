import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light = false }) => (
  <div className="mb-16 max-w-3xl">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-vks-graphite'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className={`h-1 w-20 rounded mb-6 ${light ? 'bg-vks-accent' : 'bg-vks-accent'}`}></div>
    )}
    {subtitle && (
      <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);