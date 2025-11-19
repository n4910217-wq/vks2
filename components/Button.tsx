import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const WhatsAppButton: React.FC<ButtonProps> = ({ 
  text = "Получить консультацию", 
  className = "",
  variant = 'primary'
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-vks-accent focus:ring-offset-2";
  
  // Primary: White background, Accent Border, Dark Text (As requested: White, rounded, accent steel border #415A77)
  const primaryClasses = "bg-white border-2 border-vks-accent text-vks-graphite hover:bg-vks-light";
  
  // Outline: Transparent/Dark context
  const outlineClasses = "bg-transparent border-2 border-white text-white hover:bg-white/10";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : outlineClasses} ${className}`}
    >
      {text}
    </a>
  );
};