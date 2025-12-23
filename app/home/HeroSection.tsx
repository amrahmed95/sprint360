"use client";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import Button from "../../components/ui/Button";

const slides = [
  {
    headline: "Your Transformation Partner, Not a Vendor",
    subheadline:
      "We bridge the gap between business vision and measurable reality through integrated software, data, and AI sprints.",
    cta: "Start Your First Sprint",
  },
  {
    headline: "Integrated Software + Data + AI Execution",
    subheadline:
      "A multidisciplinary approach to solving complex digital challenges with end-to-end ownership.",
    cta: "See Our Integrated Approach and Start Your 360° Journey",
  },
  {
    headline: "From Data to Decisions",
    subheadline:
      "Harness AI, analytics, and web solutions to make smarter business choices — fast and precise.",
    cta: "Book a Sprint Consultation",
  },
  {
    headline: "From AI Potential to Tangible Business Value",
    subheadline:
      "Move beyond experiments and pilot projects. We deliver working solutions with clear impact and transparency.",
    cta: "Book a Strategy Sprint",
  },
  {
    headline: "Innovation, Reliability. Delivered End-to-End",
    subheadline:
      "We cover every angle of your project with speed, accuracy, and 360° insight.",
    cta: "See Our Work in Action",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.jpg"
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

      {/* Subtle animated circular rings (visual motion) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slower" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg transition-all duration-700 ease-in-out">
          {current.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-opacity duration-700">
          {current.subheadline}
        </p>
        <div className="flex justify-center gap-4">
          <Button className="shadow-[0_0_15px_var(--color-accent)] hover:scale-105 transition-transform">
            {current.cta}
          </Button>
          <Button
            variant="secondary"
            className="hover:shadow-[0_0_10px_var(--color-accent)] hover:scale-105"
          >
            <Link href="#services">Learn more</Link>
          </Button>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 flex justify-center w-full gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "bg-[--color-accent] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 80s linear infinite;
        }
      `}</style>
    </section>
  );
}
