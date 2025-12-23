'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/70"
      onClick={onClose} // click outside to close
    >
      <div
        className="bg-[--color-card] text-[--color-foreground] rounded-2xl p-6 sm:p-8 shadow-2xl w-11/12 max-w-md relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {children}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[--color-muted] hover:text-[--color-accent]"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
