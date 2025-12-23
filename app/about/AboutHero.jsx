"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[--color-background] overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-linear-to-br from-[--color-accent]/5 via-transparent to-[--color-card]/10 pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 w-full gap-12 relative z-10">
        {/* Left: Text */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Subheading */}
          <motion.p
            className="text-sm md:text-base font-semibold text-[--color-accent] uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Your Transformation Partner, Not a Vendor
          </motion.p>

          {/* Main Headline - Split for better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[--color-foreground]">
              We bridge the gap between
            </h3>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[--color-foreground]">
              business vision and measurable reality
            </h3>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-[--color-muted] max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sprint360 combines software, data, and AI expertise into focused
            execution sprints that deliver tangible business outcomes with speed
            and transparency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="btn-cta shadow-[0_0_15px_var(--color-accent)] hover:scale-105 transition-transform">
              <span className="cta-label">Explore Services</span>
            </button>
            <button className="px-6 py-3 border border-[--color-accent] text-[--color-accent] rounded-lg hover:bg-[--color-accent]/10 transition-all font-semibold">
              Get a Consultation
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Video */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-3xl shadow-2xl bg-linear-to-br from-[--color-accent]/20 to-[--color-card] p-2 md:p-3 overflow-hidden group"
        >
          {/* Animated border glow */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-[--color-accent] to-[--color-accent-hover] rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500 pointer-events-none" />

          {/* Inner clip container - matches outer radius */}
          <div className="relative rounded-3xl overflow-hidden bg-[--color-card]">
            <video
              className="w-full h-auto object-cover block"
              src="https://videos.pexels.com/video-files/3125427/3125427-uhd_2560_1440_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-[--color-accent]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
