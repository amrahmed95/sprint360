"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function FAQSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does your sprint model work?",
      a: "We work in focused predetermined days of sprints across the full development lifecycle, each delivering specific, measurable outcomes. Each sprint begins with clear success criteria and ends with a working solution. This approach provides transparency, reduces risk, and ensures continuous progress.",
    },
    {
      q: "What makes your approach different from traditional agencies?",
      a: "We're transformation partners, not vendors. We combine software, data, and AI expertise under one roof, work in outcome-focused sprints, and act as an extension of your team. We're obsessed with your business outcomes, not just project completion.",
    },
    {
      q: "How long will my project take?",
      a: "Depends on scope. We provide a detailed timeline during the discovery phase.",
    },
    {
      q: "Do you provide designs only or full implementation?",
      a: "Both. We can deliver design, engineering, or both in partnership with your team. Choose the engagement model that works best for you.",
    },
    {
      q: "What are your hourly rates?",
      a: "Our rates are customized based on project scope, complexity, and duration. We offer competitive pricing tailored to your specific needs rather than standard hourly rates. With us, you can be confident that you are getting the best possible rates without compromising on quality",
    },
    {
      q: "Do you work with fixed-price or time-and-materials contracts?",
      a: "We're flexible! We can work with fixed-price sprint contracts for well-defined scopes which provide budget certainty and align with our outcome-focused model, or time-and-materials for more agile, evolving requirements. For ongoing partnerships, we offer retainer models with clear scope and deliverables.",
    },
    {
      q: "How do you ensure quality and maintainability?",
      a: "We apply Amazon-inspired operational rigor: clear documentation, automated testing, code reviews, and infrastructure-as-code. Every project includes knowledge transfer and is built with long-term maintainability in mind.",
    },
    {
      q: "Can you integrate with our existing team and systems?",
      a: "Absolutely. We're designed to integrate seamlessly. We use your existing tools, follow your processes, and work alongside your team. Knowledge transfer and collaboration are built into our engagement model.",
    },
    {
      q: "How do you handle data security and compliance?",
      a: "Security is built into our process, not added later. We follow best practices for data encryption, access controls, and compliance (GDPR, CCPA, HIPAA as needed). We conduct regular security reviews and can help you navigate industry-specific regulations.",
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
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[--color-foreground] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[--color-muted] max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and
            support.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Grid - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-[--color-card] to-[--color-card-border] p-1">
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-[--color-card]">
                <Image
                  src="/images/faq-illustration.png"
                  alt="FAQ Illustration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Fallback background if image doesn't load */}
              </div>
            </div>

            {/* Decorative elements for image section */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[--color-accent]/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[--color-accent]/5 rounded-full blur-xl -z-10" />
          </motion.div>

          {/* Right Grid - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[--color-card]/50 backdrop-blur-sm rounded-xl border border-[--color-card-border] p-1"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full faq-trigger group p-4 rounded-lg hover:bg-[--color-card] transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-left text-base md:text-lg font-semibold text-[--color-foreground] group-hover:text-[--color-accent] transition-colors pr-4">
                      {faq.q}
                    </h3>
                    <motion.svg
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-5 h-5 text-[--color-accent] shrink-0"
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
                    </motion.svg>
                  </div>
                </motion.button>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="faq-content px-4 pb-4">
                        <p className="text-[--color-muted] leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-[--color-card-border]"
        >
          <p className="text-[--color-muted] mb-6">
            Still have questions? We're here to help.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-cta shadow-[0_0_20px_var(--color-accent)] hover:shadow-[0_0_30px_var(--color-accent)] inline-flex items-center gap-2"
          >
            <span className="cta-label">Contact Us</span>
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
