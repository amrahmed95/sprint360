"use client";
import React, { useMemo, useState } from "react";

/**
 * CostEstimator.tsx - COMPANY-CENTRIC VERSION
 * Uses YOUR company's base rate with regional and service-specific adjustments
 * Shows YOUR revenue, profitability, and client-facing quotes
 */

type Complexity = "simple" | "medium" | "complex";

type ServiceKey =
  | "uiux"
  | "web"
  | "mobile"
  | "data_viz"
  | "data_science"
  | "ai";

// YOUR COMPANY'S BASE RATE - SET THIS TO YOUR ACTUAL RATE
const COMPANY_BASE_RATE = 30; // Your company's hourly rate in USD

// Service-specific multipliers (adjust based on YOUR pricing strategy)
const SERVICE_MULTIPLIERS: Record<ServiceKey, number> = {
  uiux: 0.9, // Slightly lower than dev
  web: 1.0, // Base rate
  mobile: 1.1, // 10% premium for mobile
  data_viz: 1.05, // 5% premium for data specialization
  data_science: 1.25, // 25% premium for specialized skills
  ai: 1.5, // 40% premium for AI expertise
};

// Regional multipliers based on YOUR pricing strategy
const REGIONAL_MULTIPLIERS: Record<string, number> = {
  "North America": 2, // $100/hour | 100% premium for high-cost markets
  Canada: 1.8, // $90/hour |	80% premium
  UK: 1.9, // $95/hour |	90% premium
  "Western Europe": 1.7, // $85/hour |	70% premium
  "Eastern Europe": 1.1, // $55/hour |	10% premium (similar cost structure)
  "South America": 0.9, // $45/hour |	10% discount
  Asia: 0.8, // $40/hour | 20% discount
  "Middle East(GCC)": 1.3, // $65/hour |	30% premium for oil-rich markets
  Africa: 0.7, // $35/hour |	30% discount
  "Egypt (Local)": 1.0, // $30/hour |	Your baseline
};

const SERVICES: Record<
  ServiceKey,
  {
    label: string;
    ranges: Record<Complexity, [number, number]>;
  }
> = {
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

// Your company's cost structure
const DEVELOPER_COST_PER_HOUR = 30; // Your actual cost per developer hour
const OVERHEAD_RATE = 1.3; // 30% overhead (tools, office, management)
const COMPANY_PROFIT_MARGIN = 1.25; // 25% profit margin
const CONTINGENCY_BUFFER = 1.15; // 15% contingency

// Client readiness factors
const CLIENT_FACTORS = {
  requirements: { clear: 1.0, partial: 1.2, vague: 1.5 },
  availability: { dedicated: 1.0, partTime: 1.15, limited: 1.3 },
};

// Project complexity factors
const COMPLEXITY_FACTORS = {
  legacyIntegration: 1.25,
  highSecurity: 1.25,
  regulatoryCompliance: 1.2,
  realTimeProcessing: 1.2,
  teamCoordination: 1.15,
};

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function midpoint([low, high]: [number, number]) {
  return Math.round((low + high) / 2);
}

function calculateTimeline(totalHours: number) {
  const developerMonths = totalHours / 130;

  if (developerMonths <= 1) return "1-2 months";
  if (developerMonths <= 3) return "2-4 months";
  if (developerMonths <= 6) return "4-7 months";
  if (developerMonths <= 12) return "7-12 months";
  return "12+ months";
}

function generateClientQuote(internalRevenue: number) {
  const clientQuote =
    internalRevenue * COMPANY_PROFIT_MARGIN * CONTINGENCY_BUFFER;
  const roundedQuote = Math.round(clientQuote / 1000) * 1000;
  const lowRange = roundedQuote * 0.9;
  const highRange = roundedQuote * 1.1;

  return {
    quoteRange: `${formatUSD(lowRange)} — ${formatUSD(highRange)}`,
    fixedBidSuggestion: formatUSD(roundedQuote),
  };
}

function calculateProfitability(totalHours: number, totalRevenue: number) {
  const totalCost = totalHours * DEVELOPER_COST_PER_HOUR * OVERHEAD_RATE;
  const netProfit = totalRevenue - totalCost;
  const margin = (netProfit / totalRevenue) * 100;

  return {
    grossRevenue: totalRevenue,
    totalCost: Math.round(totalCost),
    netProfit: Math.round(netProfit),
    margin: `${margin.toFixed(1)}%`,
    breakEvenPoint:
      Math.round(totalCost / (totalRevenue / totalHours)) + " hours",
  };
}

export default function CostEstimator() {
  // Form state
  const [selectedServices, setSelectedServices] = useState<
    Record<ServiceKey, boolean>
  >({
    uiux: true,
    web: true,
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

  const [region, setRegion] = useState<string>("North America");
  const [requirementsClarity, setRequirementsClarity] = useState<
    "clear" | "partial" | "vague"
  >("clear");
  const [clientAvailability, setClientAvailability] = useState<
    "dedicated" | "partTime" | "limited"
  >("dedicated");

  // Complexity factors
  const [legacyIntegration, setLegacyIntegration] = useState(false);
  const [highSecurity, setHighSecurity] = useState(false);
  const [regulatoryCompliance, setRegulatoryCompliance] = useState(false);
  const [realTimeProcessing, setRealTimeProcessing] = useState(false);
  const [teamCoordination, setTeamCoordination] = useState(false);

  // Derived calculations
  const calculation = useMemo(() => {
    let totalLowHours = 0;
    let totalHighHours = 0;
    let serviceBreakdown: any[] = [];

    // Calculate base hours and revenue for each service
    (Object.keys(SERVICES) as ServiceKey[]).forEach((key) => {
      if (!selectedServices[key]) return;

      const complexity = complexities[key];
      const [lowHours, highHours] = SERVICES[key].ranges[complexity];

      // Calculate service-specific rate
      const serviceRate =
        COMPANY_BASE_RATE *
        SERVICE_MULTIPLIERS[key] *
        REGIONAL_MULTIPLIERS[region];

      const lowRevenue = lowHours * serviceRate;
      const highRevenue = highHours * serviceRate;

      totalLowHours += lowHours;
      totalHighHours += highHours;

      serviceBreakdown.push({
        key,
        label: SERVICES[key].label,
        complexity,
        lowHours,
        highHours,
        midHours: midpoint([lowHours, highHours]),
        yourRate: Math.round(serviceRate),
        lowRevenue: Math.round(lowRevenue),
        highRevenue: Math.round(highRevenue),
      });
    });

    // Apply complexity factors
    let complexityMultiplier = 1.0;
    if (legacyIntegration)
      complexityMultiplier *= COMPLEXITY_FACTORS.legacyIntegration;
    if (highSecurity) complexityMultiplier *= COMPLEXITY_FACTORS.highSecurity;
    if (regulatoryCompliance)
      complexityMultiplier *= COMPLEXITY_FACTORS.regulatoryCompliance;
    if (realTimeProcessing)
      complexityMultiplier *= COMPLEXITY_FACTORS.realTimeProcessing;
    if (teamCoordination)
      complexityMultiplier *= COMPLEXITY_FACTORS.teamCoordination;

    // Apply client factors
    const requirementsMultiplier =
      CLIENT_FACTORS.requirements[requirementsClarity];
    const availabilityMultiplier =
      CLIENT_FACTORS.availability[clientAvailability];

    const totalMultiplier =
      complexityMultiplier * requirementsMultiplier * availabilityMultiplier;

    // Calculate adjusted hours and revenue
    const adjustedLowHours = Math.round(totalLowHours * totalMultiplier);
    const adjustedHighHours = Math.round(totalHighHours * totalMultiplier);
    const avgHours = (adjustedLowHours + adjustedHighHours) / 2;

    // Recalculate revenue with adjusted hours (proportional adjustment)
    let totalLowRevenue = 0;
    let totalHighRevenue = 0;

    serviceBreakdown = serviceBreakdown.map((service) => {
      const proportion =
        (service.midHours * totalMultiplier) / service.midHours;
      const adjustedLowRevenue = service.lowRevenue * proportion;
      const adjustedHighRevenue = service.highRevenue * proportion;

      totalLowRevenue += adjustedLowRevenue;
      totalHighRevenue += adjustedHighRevenue;

      return {
        ...service,
        adjustedLowHours: Math.round(service.lowHours * totalMultiplier),
        adjustedHighHours: Math.round(service.highHours * totalMultiplier),
        adjustedLowRevenue: Math.round(adjustedLowRevenue),
        adjustedHighRevenue: Math.round(adjustedHighRevenue),
      };
    });

    const avgRevenue = (totalLowRevenue + totalHighRevenue) / 2;
    const effectiveHourlyRate = avgRevenue / avgHours;

    // Calculate profitability
    const profitability = calculateProfitability(avgHours, avgRevenue);

    // Generate client-facing quote
    const clientQuote = generateClientQuote(avgRevenue);

    return {
      // Your company's financials
      yourCompanyRevenue: {
        low: Math.round(totalLowRevenue),
        high: Math.round(totalHighRevenue),
        avg: Math.round(avgRevenue),
      },
      effectiveHourlyRate: Math.round(effectiveHourlyRate),
      profitability,

      // Client-facing estimates
      clientQuote,

      // Project metrics
      hours: {
        low: adjustedLowHours,
        high: adjustedHighHours,
        avg: Math.round(avgHours),
      },
      timeline: calculateTimeline(avgHours),

      // Breakdown
      breakdown: serviceBreakdown,

      // Multipliers applied
      multipliers: {
        regional: REGIONAL_MULTIPLIERS[region],
        complexity: complexityMultiplier,
        requirements: requirementsMultiplier,
        availability: availabilityMultiplier,
        total: totalMultiplier,
      },
    };
  }, [
    selectedServices,
    complexities,
    region,
    requirementsClarity,
    clientAvailability,
    legacyIntegration,
    highSecurity,
    regulatoryCompliance,
    realTimeProcessing,
    teamCoordination,
  ]);

  function toggleService(k: ServiceKey) {
    setSelectedServices((p) => ({ ...p, [k]: !p[k] }));
  }

  function setComplexityFor(k: ServiceKey, c: Complexity) {
    setComplexities((p) => ({ ...p, [k]: c }));
  }

  const anySelected = Object.values(selectedServices).some(Boolean);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="card bg-[--color-card] border border-[--color-card-border] p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4">
          Company Cost Estimator (Internal Tool)
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Using your company rate: {formatUSD(COMPANY_BASE_RATE)}/hour
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Services Selection */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-3">
                  Select Services & Complexity
                </label>
                <div className="space-y-3">
                  {(Object.keys(SERVICES) as ServiceKey[]).map((k) => (
                    <div
                      key={k}
                      className="flex items-center gap-3 p-3 border border-[--color-card-border] rounded-lg"
                    >
                      <input
                        id={`svc-${k}`}
                        type="checkbox"
                        checked={!!selectedServices[k]}
                        onChange={() => toggleService(k)}
                        className="w-4 h-4"
                      />
                      <label htmlFor={`svc-${k}`} className="flex-1">
                        <div className="font-medium">{SERVICES[k].label}</div>
                        <div className="text-xs text-muted-foreground">
                          Service multiplier: x
                          {SERVICE_MULTIPLIERS[k].toFixed(2)}
                        </div>
                      </label>
                      <select
                        value={complexities[k]}
                        onChange={(e) =>
                          setComplexityFor(k, e.target.value as Complexity)
                        }
                        disabled={!selectedServices[k]}
                        className="p-2 rounded border border-[--color-card-border] bg-[--color-card] text-sm"
                      >
                        <option value="simple">Simple</option>
                        <option value="medium">Medium</option>
                        <option value="complex">Complex</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regional Pricing */}
              <div>
                <label className="block text-sm font-medium mb-2">Region</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-2 rounded border border-[--color-card-border] bg-[--color-card]"
                >
                  {Object.keys(REGIONAL_MULTIPLIERS).map((r) => (
                    <option key={r} value={r}>
                      {r} — x{REGIONAL_MULTIPLIERS[r].toFixed(2)}
                    </option>
                  ))}
                </select>
                <div className="text-xs text-muted-foreground mt-1">
                  Effective rate:{" "}
                  {formatUSD(COMPANY_BASE_RATE * REGIONAL_MULTIPLIERS[region])}
                  /hour
                </div>
              </div>

              {/* Client Readiness */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Requirements Clarity
                </label>
                <select
                  value={requirementsClarity}
                  onChange={(e) =>
                    setRequirementsClarity(e.target.value as any)
                  }
                  className="w-full p-2 rounded border border-[--color-card-border] bg-[--color-card]"
                >
                  <option value="clear">Clear (x1.0)</option>
                  <option value="partial">Partially defined (x1.2)</option>
                  <option value="vague">Vague / exploratory (x1.5)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Team Availability
                </label>
                <select
                  value={clientAvailability}
                  onChange={(e) => setClientAvailability(e.target.value as any)}
                  className="w-full p-2 rounded border border-[--color-card-border] bg-[--color-card]"
                >
                  <option value="dedicated">Dedicated (x1.0)</option>
                  <option value="partTime">Part-time (x1.15)</option>
                  <option value="limited">Limited (x1.3)</option>
                </select>
              </div>

              {/* Complexity Factors */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  Project Complexity Factors
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex gap-2 items-center">
                    <input
                      id="legacy"
                      type="checkbox"
                      checked={legacyIntegration}
                      onChange={() => setLegacyIntegration((s) => !s)}
                    />
                    <label htmlFor="legacy" className="text-sm">
                      Legacy system integration (+25%)
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="security"
                      type="checkbox"
                      checked={highSecurity}
                      onChange={() => setHighSecurity((s) => !s)}
                    />
                    <label htmlFor="security" className="text-sm">
                      High security / compliance (+25%)
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="compliance"
                      type="checkbox"
                      checked={regulatoryCompliance}
                      onChange={() => setRegulatoryCompliance((s) => !s)}
                    />
                    <label htmlFor="compliance" className="text-sm">
                      Regulatory compliance (+20%)
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="realtime"
                      type="checkbox"
                      checked={realTimeProcessing}
                      onChange={() => setRealTimeProcessing((s) => !s)}
                    />
                    <label htmlFor="realtime" className="text-sm">
                      Real-time processing (+20%)
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      id="team"
                      type="checkbox"
                      checked={teamCoordination}
                      onChange={() => setTeamCoordination((s) => !s)}
                    />
                    <label htmlFor="team" className="text-sm">
                      Distributed team coordination (+15%)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {!anySelected ? (
              <div className="bg-[--color-background] p-6 rounded-lg border border-[--color-card-border] text-center">
                <div className="text-muted-foreground">
                  Select at least one service to see estimates.
                </div>
              </div>
            ) : (
              <>
                {/* Your Company's Financials */}
                <div className="bg-[--color-background] p-4 rounded-lg border border-[--color-card-border]">
                  <h4 className="font-medium mb-3 text-[--color-accent]">
                    Your Company's Financials
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Your Revenue
                      </div>
                      <div className="text-xl font-bold">
                        {formatUSD(calculation.yourCompanyRevenue.low)} —{" "}
                        {formatUSD(calculation.yourCompanyRevenue.high)}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground">
                        Effective Hourly Rate
                      </div>
                      <div className="text-lg font-semibold">
                        {formatUSD(calculation.effectiveHourlyRate)}/hour
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Net Profit
                        </div>
                        <div className="font-medium">
                          {formatUSD(calculation.profitability.netProfit)}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">
                          Margin
                        </div>
                        <div className="font-medium">
                          {calculation.profitability.margin}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Proposal */}
                <div className="bg-[--color-background] p-4 rounded-lg border border-[--color-card-border]">
                  <h4 className="font-medium mb-3">Client Proposal</h4>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Suggested Quote Range
                      </div>
                      <div className="text-lg font-bold text-[--color-accent]">
                        {calculation.clientQuote.quoteRange}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground">
                        Fixed Bid Suggestion
                      </div>
                      <div className="font-medium">
                        {calculation.clientQuote.fixedBidSuggestion}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="bg-[--color-background] p-4 rounded-lg border border-[--color-card-border]">
                  <h4 className="font-medium mb-3">Project Metrics</h4>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Effort Required
                      </div>
                      <div className="font-medium">
                        {calculation.hours.low.toLocaleString()} —{" "}
                        {calculation.hours.high.toLocaleString()} hours
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground">
                        Timeline
                      </div>
                      <div className="font-medium">{calculation.timeline}</div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Multipliers applied: Regional (x
                      {calculation.multipliers.regional.toFixed(2)}), Complexity
                      (x{calculation.multipliers.complexity.toFixed(2)}),
                      Requirements (x
                      {calculation.multipliers.requirements.toFixed(2)})
                    </div>
                  </div>
                </div>

                {/* Service Breakdown */}
                <div className="bg-[--color-background] p-4 rounded-lg border border-[--color-card-border]">
                  <h4 className="font-medium mb-3">Service Breakdown</h4>

                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {calculation.breakdown.map((service) => (
                      <div
                        key={service.key}
                        className="p-2 rounded border border-[--color-card-border] bg-[--color-card]"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div className="text-sm font-medium">
                            {service.label}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {service.complexity}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="text-muted-foreground">Hours</div>
                            <div>
                              {service.adjustedLowHours} —{" "}
                              {service.adjustedHighHours}
                            </div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">
                              Your Revenue
                            </div>
                            <div>
                              {formatUSD(service.adjustedLowRevenue)} —{" "}
                              {formatUSD(service.adjustedHighRevenue)}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Rate: {formatUSD(service.yourRate)}/hour
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Configuration Note */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="text-sm text-yellow-800">
            <strong>Configuration:</strong> Using company base rate of{" "}
            {formatUSD(COMPANY_BASE_RATE)}/hour. Developer cost:{" "}
            {formatUSD(DEVELOPER_COST_PER_HOUR)}/hour. Profit margin:{" "}
            {((COMPANY_PROFIT_MARGIN - 1) * 100).toFixed(0)}%.
          </div>
        </div>
      </div>
    </section>
  );
}
