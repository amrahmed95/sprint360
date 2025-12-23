"use client";
import React, { JSX } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CrossCuttingSection(): JSX.Element {
  const router = useRouter();

  const cards = [
    {
      icon: "🚀",
      title: "Our Sprint Model",
      items: [
        {
          label: "Discovery Sprint",
          desc: "Identify high-impact opportunity, define success metrics (2-6 weeks)",
        },
        {
          label: "Execution Sprint",
          desc: "Build, test, and deploy working solutions (predefined sprint cycles)",
        },
        {
          label: "Optimization Sprint",
          desc: "Iterate, scale, and enhance based on results",
        },
      ],
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      desc: "We build with security-first principles: encryption, access controls, GDPR/CCPA compliance, and industry-specific regulations built into every project.",
    },
    {
      icon: "⚡",
      title: "Partner, Not Vendor",
      desc: "We act as an extension of your team with transparent communication, shared accountability, and obsession with your business outcomes.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[--color-background] overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-linear-to-br from-[--color-accent]/3 via-transparent to-[--color-card]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[--color-foreground] mb-4">
            Project Types, Security & Support
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            Flexible engagement models with enterprise-grade security and
            dedicated support.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="card feature-card h-full p-6 hover:shadow-[0_0_30px_rgba(30,144,255,0.1)]">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[--color-foreground] mb-4 group-hover:text-[--color-accent] transition-colors">
                  {card.title}
                </h3>

                {/* Content */}
                {card.items ? (
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="text-sm">
                        <span className="text-[--color-accent] font-semibold block mb-1">
                          {item.label}
                        </span>
                        <span className="text-[--color-muted]">
                          {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[--color-muted] leading-relaxed">
                    {card.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[--color-muted] mb-6 max-w-2xl mx-auto">
            Need a custom engagement model? Let's discuss your specific
            requirements.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-cta shadow-[0_0_20px_var(--color-accent)] hover:shadow-[0_0_30px_var(--color-accent)] inline-flex items-center gap-2"
          >
            <span className="cta-label">Discuss Your Needs</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[--color-accent]/3 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[--color-accent]/2 rounded-full blur-3xl -z-10" />
    </section>
  );
}
