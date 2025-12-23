'use client';
import React from 'react';

// Simple utility to join class names conditionally
function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 px-6 py-3 text-sm md:text-base';

  const variants = {
    primary: 'bg-[--color-accent] text-white hover:bg-[--color-accent-hover] shadow-sm',
    secondary:
      'bg-[--color-card] text-[--color-foreground] border border-[--color-card-border] hover:border-[--color-accent] hover:text-[--color-accent]',
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
