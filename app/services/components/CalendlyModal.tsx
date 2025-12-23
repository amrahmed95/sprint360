"use client";
import React, { JSX } from "react";
import Modal from "../../../components/ui/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ open, onClose }: Props): JSX.Element {
  const calendlyUrl = "https://calendly.com/amr-ahmedm95/30min";

  return (
    <Modal isOpen={open} onClose={onClose}>
      <div className="p-6 max-w-4xl w-full bg-card rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Schedule a Meeting
            </h3>
            <p className="text-muted text-sm mt-1">
              Let's discuss your project and find the perfect solution
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-foreground transition-colors p-2"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Calendly Embed */}
        <div className="border border-card-border rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Calendly Scheduling"
            src={calendlyUrl}
            className="w-full h-[640px]"
            frameBorder="0"
            loading="lazy"
            style={{ background: "var(--color-card)" }}
          />
        </div>

        {/* Footer Info */}
        <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <p className="text-sm text-muted text-center">
            💡{" "}
            <span className="font-semibold text-foreground">
              Pro tip: Have your project requirements handy for a more
              productive conversation.
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
