import React from "react";

interface Props {
  onGetStarted: () => void;
}

export default function CTASection({ onGetStarted }: Props) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-card to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-hover/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Ready to Transform Your Project?
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto mb-12">
          Let's discuss your software, AI, or data needs and create a tailored
          solution that drives real business value. Schedule a call with our
          team today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Primary CTA */}
          <button
            onClick={onGetStarted}
            className="btn-cta flex items-center gap-2 px-8 py-4 text-base font-semibold whitespace-nowrap"
          >
            <span>Schedule a 30-min Call</span>
            <span className="text-lg">→</span>
          </button>

          {/* Secondary CTA */}
          <a
            href="mailto:sprint360@gmail.com"
            className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-foreground border border-card-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-200"
          >
            <span>Send Project Brief</span>
            <span className="text-lg">✉️</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-12 border-t border-card-border/30 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">✓</span>
            <span>Expert team ready to help</span>
          </div>
        </div>
      </div>
    </section>
  );
}
