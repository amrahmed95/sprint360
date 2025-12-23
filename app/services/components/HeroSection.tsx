"use client";
import React, { JSX } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Props {
  onContact: () => void;
}

export default function HeroSection({ onContact }: Props): JSX.Element {
  return (
    <section className="hero mx-auto max-w-7xl px-6 py-5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-8">
          {/* Main Heading with Enhanced Layout */}
          <div className="space-y-6">
            {/* Removed "Sprint360 Services" badge */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Transformation Partner,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                Not a Vendor
              </span>
            </h1>

            {/* Enhanced Description with Visual Elements */}
            <div className="relative max-w-2xl">
              <p className="text-xl text-gray-400 dark:text-gray-300 leading-relaxed">
                We bridge the gap between business vision and measurable reality
                through integrated
                <br />
                <span className="relative inline-block mx-2">
                  <span className="font-semibold text-gray-300 dark:text-gray-100 px-3 py-1 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border border-blue-200/30 dark:border-blue-800/30">
                    software, data, and AI sprints
                  </span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                </span>
              </p>

              {/* Decorative accent line */}
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact">
              <Button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all shadow-blue-500/25">
                <span className="text-lg flex items-center gap-2">
                  Start Your First Sprint
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
                </span>
              </Button>
            </Link>
            <a
              href="#services"
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-500 transition-all inline-flex items-center gap-2"
            >
              Explore Our Services
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Enhanced Value Proposition Cards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Why Choose Sprint360?
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-blue-200 to-transparent dark:from-gray-700 dark:via-blue-800"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sprint-Based Delivery */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/30 dark:from-blue-900/20 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-base uppercase tracking-wide">
                        Sprint-Based Delivery
                      </div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    We work in predefined outcome-focused cycles, not endless
                    projects. Each sprint delivers measurable business value.
                  </div>
                </div>
              </div>

              {/* Integrated Expertise */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-purple-50/30 dark:from-purple-900/20 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-purple-600/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-base uppercase tracking-wide">
                        Integrated Expertise
                      </div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Software + Data + AI under one roof. No handoffs, no
                    miscommunication, just seamless execution.
                  </div>
                </div>
              </div>

              {/* Partnership Focus */}
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-green-50/30 dark:from-green-900/20 dark:to-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-base uppercase tracking-wide">
                        Partnership Focus
                      </div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    We act as an extension of your team, sharing your goals and
                    celebrating your successes together.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed "Trusted by Industry Leaders" section */}
        </div>

        {/* Right Column - Visual */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            {/* Video or Animation Container */}
            <div className="relative">
              <video
                className="w-full h-[400px] object-cover"
                playsInline
                autoPlay
                muted
                loop
                src="/video/Services-loop-background.mp4"
                poster="/images/hero-poster.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">
                    Sprint-Based Success
                  </h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each sprint delivers measurable outcomes — no vague promises,
                  just tangible progress.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
