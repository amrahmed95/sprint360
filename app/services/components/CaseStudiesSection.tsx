"use client";
import React, { JSX } from "react";
import Button from "../../../components/ui/Button";
import Link from "next/link";

export default function CaseStudiesSection(): JSX.Element {
  return (
    <section id="case-studies" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Approach in Action
        </h2>
        <p className="text-xl text-[--color-muted] max-w-3xl mx-auto">
          While we respect client confidentiality, here's how our sprint model
          typically delivers value across key scenarios.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Scenario 1: Data Analysis */}
        <div className="card rounded-2xl p-8 hover:shadow-lg transition-all">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[--color-foreground]">
              Data Intelligence Scenario
            </h3>
            <p className="text-[--color-muted] text-sm">
              Common business challenge we solve
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-[--color-card-border] bg-[--color-background]">
              <div className="text-sm font-semibold text-[--color-muted] mb-1">
                The Challenge
              </div>
              <div className="text-[--color-foreground]">
                Scattered data sources with no unified view of business
                performance
              </div>
            </div>
            <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
              <div className="text-sm font-semibold text-blue-400 mb-1">
                Our Sprint Approach
              </div>
              <div className="text-[--color-foreground]">
                A focused dashboard sprint to unify data and create interactive
                reporting
              </div>
            </div>
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
              <div className="text-sm font-semibold text-green-400 mb-1">
                Typical Outcome
              </div>
              <div className="text-[--color-foreground]">
                Clear visibility into KPIs, faster decision-making, reduced
                manual reporting
              </div>
            </div>
          </div>
        </div>

        {/* Scenario 2: AI Implementation */}
        <div className="card rounded-2xl p-8 hover:shadow-lg transition-all">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[--color-foreground]">
              AI Automation Scenario
            </h3>
            <p className="text-[--color-muted] text-sm">
              Common business challenge we solve
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-[--color-card-border] bg-[--color-background]">
              <div className="text-sm font-semibold text-[--color-muted] mb-1">
                The Challenge
              </div>
              <div className="text-[--color-foreground]">
                Manual, repetitive processes causing errors and slowing growth
              </div>
            </div>
            <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
              <div className="text-sm font-semibold text-purple-400 mb-1">
                Our Sprint Approach
              </div>
              <div className="text-[--color-foreground]">
                A dedicated AI automation sprint to design and deploy
                intelligent workflows
              </div>
            </div>
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
              <div className="text-sm font-semibold text-green-400 mb-1">
                Typical Outcome
              </div>
              <div className="text-[--color-foreground]">
                Process time reduction, error elimination, capacity for growth
              </div>
            </div>
          </div>
        </div>

        {/* Scenario 3: Software Development */}
        <div className="card rounded-2xl p-8 hover:shadow-lg transition-all">
          <div className="mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-orange-600/20 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl flex items-center justify-center mb-4 border border-orange-500/20">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[--color-foreground]">
              Software Development Scenario
            </h3>
            <p className="text-[--color-muted] text-sm">
              Common business challenge we solve
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-[--color-card-border] bg-[--color-background]">
              <div className="text-sm font-semibold text-[--color-muted] mb-1">
                The Challenge
              </div>
              <div className="text-[--color-foreground]">
                Need to launch an MVP quickly but lack in-house technical
                capacity
              </div>
            </div>
            <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
              <div className="text-sm font-semibold text-orange-400 mb-1">
                Our Sprint Approach
              </div>
              <div className="text-[--color-foreground]">
                A targeted development sprint to build, test, and deploy a
                production-ready MVP
              </div>
            </div>
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
              <div className="text-sm font-semibold text-green-400 mb-1">
                Typical Outcome
              </div>
              <div className="text-[--color-foreground]">
                Working product in market, validated learning, foundation for
                scaling
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-[--color-muted] italic">
          *These scenarios illustrate our typical engagement patterns. Actual
          results vary based on specific context and collaboration.
        </p>
        <Link href="/contact">
          <Button className="mt-8 px-8 py-3 bg-gradient-to-r from-[--color-accent] to-[--color-accent-hover] text-white rounded-lg hover:shadow-lg transition-all">
            Discuss Your Specific Scenario
          </Button>
        </Link>
      </div>
    </section>
  );
}
