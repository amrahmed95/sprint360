"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogTeaser(): JSX.Element {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[--color-background] via-[--color-card] to-[--color-background] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full border border-[--color-card-border] mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[--color-accent] uppercase tracking-wider">
              Coming Soon
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              The Future of
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mt-2">
              Tech & Business Thought
            </span>
          </h1>

          <p className="text-xl text-[--color-muted] max-w-3xl mx-auto">
            A groundbreaking publication that will redefine how leaders navigate
            the intersection of technology, strategy, and execution in the
            coming decade.
          </p>
        </motion.div>

        {/* Main Teaser Card */}
        <motion.div
          className="relative group mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="relative card border border-[--color-card-border] rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500 to-transparent rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[--color-foreground]">
                      Prepare for Deep Insights
                    </h2>
                    <p className="text-lg text-[--color-muted] mb-6">
                      We're crafting a publication that will become essential
                      reading for forward-thinking leaders, CTOs, and
                      visionaries who want to stay ahead of the curve.
                    </p>
                  </div>

                  {/* Value Propositions */}
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🧠",
                        title: "Unprecedented Depth",
                        description:
                          "Technical analysis that goes beyond surface-level trends",
                      },
                      {
                        icon: "⚡",
                        title: "Execution-Focused",
                        description:
                          "Bridge the gap between strategy and implementation",
                      },
                      {
                        icon: "🎯",
                        title: "Forward-Looking",
                        description:
                          "Anticipate trends 3-5 years before they hit mainstream",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[--color-card] to-transparent border border-[--color-card-border] hover:border-[--color-accent] transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-bold text-[--color-foreground] mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[--color-muted]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Link
                      href="#notify"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[--color-accent] to-[--color-accent-hover] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all"
                    >
                      <span>Get Early Access</span>
                      <svg
                        className="w-5 h-5"
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
                    </Link>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden border border-[--color-card-border]">
                    <div className="aspect-square bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-8xl mb-6">🚀</div>
                        <h3 className="text-2xl font-bold mb-4 text-[--color-foreground]">
                          Something Extraordinary
                          <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Is Coming
                          </span>
                        </h3>
                        <p className="text-[--color-muted]">
                          This won't be just another tech blog. It will be a
                          movement.
                        </p>
                      </div>
                    </div>

                    {/* Animated Dots */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-10 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[--color-foreground]">
            What You'll Discover
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Technical Deep Dives",
                topics: [
                  "AI Architecture",
                  "System Design",
                  "DevOps at Scale",
                  "Data Engineering",
                ],
                color: "from-blue-500 to-cyan-500",
              },
              {
                category: "Business Strategy",
                topics: [
                  "Tech Leadership",
                  "Digital Transformation",
                  "Product-Market Fit",
                  "Growth Hacking",
                ],
                color: "from-purple-500 to-pink-500",
              },
              {
                category: "Future Trends",
                topics: [
                  "Next-Gen Automation",
                  "Future of Work",
                  "Smart & Sustainable Tech",
                  "Data-Powered Decisions",
                ],
                color: "from-orange-500 to-yellow-500",
              },
            ].map((section, index) => (
              <div
                key={index}
                className="card rounded-2xl p-6 border border-[--color-card-border] hover:border-[--color-accent] transition-all group"
              >
                <div
                  className={`w-12 h-1 bg-gradient-to-r ${section.color} rounded-full mb-4`}
                ></div>
                <h3 className="text-xl font-bold mb-4 text-[--color-foreground]">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-[--color-muted]">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          id="notify"
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="card rounded-3xl p-8 text-center border border-[--color-card-border] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-[--color-foreground]">
                Be Among the First to Know
              </h3>
              <p className="text-[--color-muted] mb-8">
                Join our exclusive list to get early access, behind-the-scenes
                insights, and priority notification when we launch.
              </p>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-[--color-background] border border-[--color-card-border] rounded-xl text-[--color-foreground] placeholder-[--color-muted] focus:outline-none focus:border-[--color-accent]"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[--color-accent] to-[--color-accent-hover] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Notify Me
                  </button>
                </div>
                <p className="text-sm text-[--color-muted]">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Final Teaser */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-lg text-[--color-muted] italic max-w-2xl mx-auto">
            "The most significant publications don't just report on change—they
            create it. This will be one of those publications."
          </p>
          <div className="mt-6 inline-flex items-center gap-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[--color-accent] to-transparent"></div>
            <span className="text-[--color-accent] font-semibold">
              Coming soon. Stay tuned!
            </span>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[--color-accent] to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
