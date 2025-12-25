"use client";
import React, { useState, useEffect } from "react";
import useCostEstimator, {
  SERVICES,
  REGIONAL_MULTIPLIERS,
  Complexity,
  ServiceKey,
} from "../hooks/useCostEstimator";
import { useCalculatorAccess } from "../hooks/useCalculatorAccess";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function CostEstimator() {
  // --- FORM STATE ---
  const [selectedServices, setSelectedServices] = useState<
    Record<ServiceKey, boolean>
  >({
    uiux: false,
    web: false,
    mobile: false,
    data_viz: false,
    data_science: false,
    ai: false,
  });

  const [complexities, setComplexities] = useState<
    Record<ServiceKey, Complexity>
  >({
    uiux: "simple",
    web: "simple",
    mobile: "simple",
    data_viz: "simple",
    data_science: "simple",
    ai: "simple",
  });

  const [region, setRegion] = useState("North America");
  const [requirementsClarity, setRequirementsClarity] = useState<
    "clear" | "partial" | "vague"
  >("clear");

  const { hasAccess, isLoading } = useCalculatorAccess();

  // --- CALCULATE USING YOUR EXACT LOGIC ---
  const calculation = useCostEstimator({
    selectedServices,
    complexities,
    region,
    requirementsClarity,
  });

  // Show loading or redirect
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
          <p className="mt-4 text-muted">Loading calculator...</p>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    // Redirect to lead form
    return null;
  }

  const toggleService = (key: ServiceKey) => {
    setSelectedServices((p) => ({ ...p, [key]: !p[key] }));
  };

  const setComplexity = (key: ServiceKey, c: Complexity) => {
    setComplexities((p) => ({ ...p, [key]: c }));
  };

  const formatUSD = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <main className="min-h-screen bg-linear-to-b from-background to-card py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Project Cost Estimator
          </h1>
          <p
            className="text-lg text-muted max-w-2xl mx-auto"
            style={{ contentVisibility: "auto" }}
          >
            Get an instant, tailored cost range for your software, AI, or data
            engineering project. Adjust the parameters below to see how
            different factors impact your budget.
          </p>
        </div>

        {/* MAIN GRID: Form + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: FORM */}
          <div className="lg:col-span-2 space-y-8">
            {/* SERVICES SECTION */}
            <div className="card">
              <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                  1
                </span>
                Select Services
              </h3>

              <div className="space-y-3">
                {(Object.keys(SERVICES) as ServiceKey[]).map((key) => (
                  <div
                    key={key}
                    className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                      selectedServices[key]
                        ? "border-accent bg-accent/5"
                        : "border-card-border hover:border-card-border/70 bg-card"
                    }`}
                    onClick={() => toggleService(key)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded accent-accent cursor-pointer"
                          checked={selectedServices[key]}
                          onChange={() => toggleService(key)}
                        />

                        <div>
                          <div className="font-semibold text-foreground">
                            {SERVICES[key].label}
                          </div>
                          <div className="text-xs text-muted capitalize">
                            {complexities[key]} complexity
                          </div>
                        </div>
                      </div>

                      <select
                        value={complexities[key]}
                        disabled={!selectedServices[key]}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          setComplexity(key, e.target.value as Complexity)
                        }
                        className={`border rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                          selectedServices[key]
                            ? "border-accent/30 bg-accent/5 text-foreground cursor-pointer"
                            : "border-card-border bg-card text-muted cursor-not-allowed opacity-50"
                        }`}
                      >
                        <option value="simple">Simple</option>
                        <option value="medium">Medium</option>
                        <option value="complex">Complex</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REGION SECTION */}
            <div className="card">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                  2
                </span>
                Select Region
              </h3>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-card-border bg-card/50 rounded-lg px-4 py-3 text-foreground font-medium hover:border-accent/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              >
                {Object.keys(REGIONAL_MULTIPLIERS).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* REQUIREMENTS CLARITY SECTION */}
            <div className="card">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg">
                  3
                </span>
                Requirements Clarity
              </h3>
              <select
                value={requirementsClarity}
                onChange={(e) => setRequirementsClarity(e.target.value as any)}
                className="w-full border border-card-border bg-card/50 rounded-lg px-4 py-3 text-foreground font-medium hover:border-accent/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              >
                <option value="clear">Clear & well-defined</option>
                <option value="partial">Partially defined</option>
                <option value="vague">Vague / Exploratory</option>
              </select>
            </div>
          </div>

          {/* RIGHT COLUMN: RESULTS STICKY */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* ESTIMATED COST CARD */}
              <div className="card border-accent/30 bg-linear-to-br from-accent/10 to-accent/5">
                <h3 className="text-lg font-bold text-accent mb-4">
                  Estimated Cost
                </h3>

                {/* TOTAL COST */}
                <div className="mb-6 pb-6 border-b border-accent/20">
                  <div className="text-xs uppercase tracking-wider text-muted mb-2">
                    Total Budget Range
                  </div>
                  <div className="text-3xl font-bold text-accent">
                    {formatUSD(calculation.clientQuote.low)}
                  </div>
                  <div className="text-sm text-muted mt-1">
                    to {formatUSD(calculation.clientQuote.high)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Includes regional rates, requirements clarity, and project
                    management
                  </div>
                </div>

                {/* HOURS */}
                <div className="mb-6 pb-6 border-b border-accent/20">
                  <div className="text-xs uppercase tracking-wider text-muted mb-2">
                    Estimated Hours
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {calculation.hours.low.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted mt-1">
                    to {calculation.hours.high.toLocaleString()} hours
                  </div>
                </div>

                {/* TIMELINE */}
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted mb-2">
                    Estimated Timeline
                  </div>
                  <div className="text-lg font-semibold text-accent-hover">
                    {calculation.timeline}
                  </div>
                </div>
              </div>

              {/* CTA BUTTON */}
              <Link
                href="/contact"
                className="btn-cta w-full justify-center py-3 px-4 text-lg"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-12 p-6 bg-card border border-card-border/50 rounded-lg">
          <h4 className="font-bold text-accent mb-2">📋 Please Note</h4>
          <p className="text-muted text-sm leading-relaxed">
            This estimate provides a preliminary range based on your selections.
            Actual costs may vary depending on final project scope, cloud
            infrastructure needs, third-party service integrations, testing
            requirements, and post-launch support level. Use this as a quick
            guide to plan your software, AI, or data project budget.
          </p>
        </div>

        {/* SERVICE BREAKDOWN */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Service Breakdown
          </h2>

          {calculation.breakdown.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calculation.breakdown.map((item) => (
                <div
                  key={item.key}
                  className="card hover:border-accent/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-foreground">
                        {item.label}
                      </h4>
                      <span className="text-xs capitalize tracking-wider text-muted">
                        {item.complexity} complexity
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-card-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">Hours:</span>
                      <span className="font-semibold text-accent">
                        {item.adjustedLowHours} – {item.adjustedHighHours}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted">Cost:</span>
                      <span className="font-semibold text-foreground">
                        {formatUSD(item.adjustedLowRevenue)} –{" "}
                        {formatUSD(item.adjustedHighRevenue)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center border border-dashed border-card-border rounded-lg">
              <p className="text-muted">
                Select at least one service to see the breakdown
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
