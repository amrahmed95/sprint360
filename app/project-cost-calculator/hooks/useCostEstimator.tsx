"use client";

import { useMemo } from "react";
export type RegionalMultipliers = Record<string, number>;

export type Complexity = "simple" | "medium" | "complex";
export type ServiceKey =
  | "uiux"
  | "web"
  | "mobile"
  | "data_viz"
  | "data_science"
  | "ai";

// ---------------- CONFIG (unchanged) ----------------

export const COMPANY_BASE_RATE = 30;

export const SERVICE_MULTIPLIERS = {
  uiux: 0.9,
  web: 1.0,
  mobile: 1.1,
  data_viz: 1.05,
  data_science: 1.25,
  ai: 1.5,
};

export const REGIONAL_MULTIPLIERS: RegionalMultipliers = {
  "North America": 2,
  Canada: 1.8,
  UK: 1.9,
  "Western Europe": 1.7,
  "Eastern Europe": 1.1,
  "South America": 0.9,
  Asia: 0.8,
  "Middle East": 1.3,
  Africa: 0.7,
};

export const SERVICES = {
  uiux: {
    label: "UI / UX Design",
    ranges: {
      simple: [40, 80],
      medium: [80, 160],
      complex: [160, 320],
    },
  },
  web: {
    label: "Software Development — Web",
    ranges: {
      simple: [80, 160],
      medium: [160, 320],
      complex: [320, 800],
    },
  },
  mobile: {
    label: "Software Development — Mobile",
    ranges: {
      simple: [100, 200],
      medium: [200, 400],
      complex: [400, 1000],
    },
  },
  data_viz: {
    label: "Data Analysis & Visualization",
    ranges: {
      simple: [40, 100],
      medium: [100, 200],
      complex: [200, 500],
    },
  },
  data_science: {
    label: "Data Science & Prediction",
    ranges: {
      simple: [80, 160],
      medium: [160, 320],
      complex: [320, 800],
    },
  },
  ai: {
    label: "AI / LLM Engineering & Agents",
    ranges: {
      simple: [80, 200],
      medium: [200, 500],
      complex: [500, 1500],
    },
  },
};

const CLIENT_FACTORS = {
  requirements: { clear: 1.0, partial: 1.2, vague: 1.5 },
};

// ---------------- UTILITIES (unchanged) ----------------

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const midpoint = ([a, b]: [number, number]) => Math.round((a + b) / 2);

function calculateTimeline(hours: number) {
  const months = hours / 130;
  if (months <= 1) return "1–2 months";
  if (months <= 3) return "2–4 months";
  if (months <= 6) return "4–7 months";
  if (months <= 12) return "7–12 months";
  return "12+ months";
}

// ---------------- MAIN HOOK ----------------

export default function useCostEstimator({
  selectedServices,
  complexities,
  region,
  requirementsClarity,
}: {
  selectedServices: Record<ServiceKey, boolean>;
  complexities: Record<ServiceKey, Complexity>;
  region: string;
  requirementsClarity: "clear" | "partial" | "vague";
}) {
  return useMemo(() => {
    let totalLowHours = 0;
    let totalHighHours = 0;

    let breakdown: any[] = [];

    // -------------- SERVICE LOOP (unchanged) --------------
    (Object.keys(SERVICES) as ServiceKey[]).forEach((key) => {
      if (!selectedServices[key]) return;

      const complexity = complexities[key];
      const [low, high] = SERVICES[key].ranges[complexity];

      const rate =
        COMPANY_BASE_RATE *
        SERVICE_MULTIPLIERS[key] *
        REGIONAL_MULTIPLIERS[region];

      totalLowHours += low;
      totalHighHours += high;

      const lowRev = low * rate;
      const highRev = high * rate;

      breakdown.push({
        key,
        label: SERVICES[key].label,
        complexity,
        lowHours: low,
        highHours: high,
        midHours: midpoint([low, high]),
        yourRate: Math.round(rate),
        lowRevenue: Math.round(lowRev),
        highRevenue: Math.round(highRev),
      });
    });

    // ---------------- MULTIPLIERS ----------------
    const multiplier = CLIENT_FACTORS.requirements[requirementsClarity];

    const adjustedLowHours = Math.round(totalLowHours * multiplier);
    const adjustedHighHours = Math.round(totalHighHours * multiplier);
    const avgHours = (adjustedLowHours + adjustedHighHours) / 2;

    // ---------------- REVENUE ADJUSTMENT ----------------
    let lowRevenue = 0;
    let highRevenue = 0;

    breakdown = breakdown.map((s) => {
      const factor = multiplier;
      const adjLowRev = s.lowRevenue * factor;
      const adjHighRev = s.highRevenue * factor;

      lowRevenue += adjLowRev;
      highRevenue += adjHighRev;

      return {
        ...s,
        adjustedLowHours: Math.round(s.lowHours * multiplier),
        adjustedHighHours: Math.round(s.highHours * multiplier),
        adjustedLowRevenue: Math.round(adjLowRev),
        adjustedHighRevenue: Math.round(adjHighRev),
      };
    });

    const avgRevenue = (lowRevenue + highRevenue) / 2;

    return {
      breakdown,
      hours: {
        low: adjustedLowHours,
        high: adjustedHighHours,
      },
      effectiveHourlyRate: Math.round(avgRevenue / avgHours),
      timeline: calculateTimeline(avgHours),
      clientQuote: {
        low: Math.round(avgRevenue * 0.9),
        high: Math.round(avgRevenue * 1.1),
      },
    };
  }, [selectedServices, complexities, region, requirementsClarity]);
}
