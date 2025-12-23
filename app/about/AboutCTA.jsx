"use client";
import { motion } from "framer-motion";

export default function AboutCTA() {
  return (
    <section className="relative w-full py-24 bg-[--color-background] overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-linear-to-br from-[--color-accent]/5 via-transparent to-[--color-card]/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[--color-foreground]">
            Ready to Start Your 360° Journey ?
          </h2>

          {/* Paragraph with styled container and arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6"
          >
            {/* Styled container around paragraph */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-5 border-2 border-[--color-accent] rounded-xl hover:bg-[--color-accent]/10 hover:shadow-[0_0_15px_var(--color-accent)] transition-all duration-300 max-w-2xl"
            >
              <p className="text-lg md:text-xl leading-relaxed text-[--color-foreground] font-medium space-y-3">
                <span className="block">
                  Through our collaboration, your concepts will become results
                </span>
                <span className="block text-[--color-accent] font-bold text-2xl">
                  swiftly, comprehensively, and accurately.
                </span>
                <span className="block bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-bold text-lg">
                  <motion.a
                    // href=""
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border-2 border-orange-500 rounded-lg font-semibold hover:bg-orange-500/15 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    <svg
                      className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                  <span className="bg-linear-to-r ml-4 from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-bold text-lg leading-tight">
                    Translate your vision into measurable impact{" "}
                  </span>
                </span>
              </p>
            </motion.div>

            {/* Styled arrow */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-[--color-accent] drop-shadow-[0_0_8px_var(--color-accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            {/* Primary CTA Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-cta shadow-[0_0_20px_var(--color-accent)] hover:shadow-[0_0_30px_var(--color-accent)] transition-all duration-300 inline-flex items-center justify-center group"
            >
              <span className="cta-label">Book a Consultation</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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

            {/* Secondary Button */}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-accent]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[--color-accent]/3 rounded-full blur-3xl -z-10" />
    </section>
  );
}
