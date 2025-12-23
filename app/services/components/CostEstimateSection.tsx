import Link from "next/link";

export default function CostEstimateSection() {
  return (
    <section className="space-y-8 p-6 bg-card rounded-lg shadow-lg mx-auto max-w-4xl">
      {/* Heading */}
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-accent">
          What Impacts Your Software & Data Project Cost?
        </h2>
        <p className="text-muted-foreground text-lg">
          Use this guide to understand the main drivers of cost for software
          development, AI solutions, and data engineering projects — then try
          our interactive estimator to get an instant, tailored budget range.
        </p>
      </header>

      {/* Core Project Drivers */}
      <div className="space-y-8">
        <h3 className="text-4xl font-bold text-accent tracking-tight pb-1">
          Core Project Drivers
        </h3>

        <div className="space-y-4">
          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Selected Services
            </h4>
            <p className="text-muted-foreground">
              Web, mobile, AI models, or data engineering — each service adds
              different scope and specialist hours. The choice between pre-built
              solutions and fully custom UI/UX & Product Design also
              significantly affects your initial investment and delivery
              timeline.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Technical Complexity
            </h4>
            <p className="text-muted-foreground">
              Integrations with third-party APIs, realtime systems, custom
              machine learning models, and automation features increase
              engineering effort, testing depth, and potential licensing fees.
              Advanced security protocols and compliance requirements (HIPAA,
              GDPR, SOC2) add another layer of technical rigor and cost.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Team & Region
            </h4>
            <p className="text-muted-foreground">
              Rates and availability vary based on region and the seniority of
              the required engineering team. Delivery methodology (Agile vs.
              Fixed-Price), communication overhead, and cross-team collaboration
              also influence delivery efficiency and overall project cost.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Requirements Clarity
            </h4>
            <p className="text-muted-foreground">
              Clear, prioritized requirements reduce uncertainty and prevent
              scope creep. Well-defined user stories, acceptance criteria, API
              documentation, and a structured plan for content or data migration
              contribute to more accurate and lower cost estimates.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Cost Considerations */}
      <div className="space-y-8">
        <h3 className="text-4xl font-bold text-accent tracking-tight pb-1">
          Additional Cost Considerations
        </h3>

        <div className="space-y-6">
          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Third-Party Services & Infrastructure
            </h4>
            <p className="text-sm text-muted-foreground">
              Costs may include SaaS subscriptions (payment gateways, analytics
              tools, cloud AI services), API usage fees, and infrastructure
              hosting. These impact both upfront development costs and long-term
              total cost of ownership.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Testing & Quality Assurance Scope
            </h4>
            <p className="text-muted-foreground">
              The required level of testing — from device/browser compatibility
              to performance/load testing, accessibility compliance (WCAG), and
              user acceptance testing (UAT) — directly affects QA resources,
              timeline, and complexity.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Maintenance & Long-Term Support
            </h4>
            <p className="text-muted-foreground">
              Post-launch considerations include hosting, security updates, bug
              fixes, and monitoring. For AI and data projects, additional effort
              is needed for model retraining, data refresh cycles, and
              maintaining prediction accuracy.
            </p>
          </div>

          <div className="p-4 border border-card-border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Content & Data Migration
            </h4>
            <p className="text-muted-foreground">
              Frequently underestimated, the effort required for creating new
              content, structuring datasets, and migrating legacy data requires
              dedicated planning and technical validation to ensure smooth
              onboarding and accurate system behavior.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 pt-8 border-t border-card-border flex items-center justify-center">
        <Link
          href="/project-cost-calculator/app"
          className="btn-cta flex items-center gap-2 px-8 py-4 text-base font-semibold text-white"
        >
          <span>Try our interactive cost estimator</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}
