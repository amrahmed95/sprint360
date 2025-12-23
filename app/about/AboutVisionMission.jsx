"use client";
import React from "react";
import { motion } from "framer-motion";

const visionMission = {
  vision: {
    title: "Our Vision",
    content:
      "A world where every business strategy is realized through flawless execution.",
    icon: "🎯",
    gradient: "from-blue-500 to-purple-600",
  },
  mission: {
    title: "Our Mission",
    content:
      "We partner with ambitious leaders to bridge the gap between vision and reality. Through our sprint-based model integrating Software, Data, and AI, we deliver tangible business outcomes with radical transparency and speed.",
    icon: "🚀",
    gradient: "from-green-500 to-teal-600",
  },
};

export default function AboutVisionMission() {
  return (
    <section className="bg-[--color-card] border-t border-b border-[--color-card-border] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[--color-accent] to-[--color-accent-hover] bg-clip-text text-transparent">
            Vision & Mission
          </h2>
          <p className="text-xl text-[--color-muted] max-w-3xl mx-auto">
            What drives us to transform ideas into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(visionMission).map(([key, item], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="card relative overflow-hidden rounded-3xl bg-gradient-to-br from-[--color-background] to-[--color-card] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[--color-card-border]/50 h-full">
                {/* Background gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-foreground]">
                    {item.title}
                  </h3>
                  <p className="text-[--color-muted] leading-relaxed text-lg">
                    {item.content}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[--color-accent]/10 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[--color-accent-hover]/10 to-transparent rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-[--color-accent]/10 to-[--color-accent-hover]/10 rounded-full border border-[--color-accent]/20">
            <span className="text-2xl">💡</span>
            <span className="text-[--color-foreground] font-semibold">
              Innovation through execution
            </span>
            <span className="text-2xl">⚡</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
