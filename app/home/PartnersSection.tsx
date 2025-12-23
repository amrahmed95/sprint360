"use client";

import React from "react";

const technologyStack = [
  {
    name: "Multi-Cloud Architecture",
    type: "Platform Strategy",
    icon: "☁️",
    description: "AWS, Azure, GCP expertise with vendor-agnostic design",
    credibility: "Future-Proof",
  },
  {
    name: "React & Next.js",
    type: "Web Development",
    icon: "⚛️",
    description: "Modern applications built for scale and user experience",
    credibility: "Scalable",
  },
  {
    name: "Python & Data Stack",
    type: "Data & AI Engineering",
    icon: "🐍",
    description: "Full-stack data science, ML, and automation capabilities",
    credibility: "Production-Ready",
  },
  {
    name: "Modern Data Platforms",
    type: "Data Engineering",
    icon: "📊",
    description: "Snowflake, Databricks, and cloud-native data solutions",
    credibility: "Enterprise-Grade",
  },
  {
    name: "LLM Integration Stack",
    type: "AI Implementation",
    icon: "🧠",
    description: "OpenAI, Anthropic, and custom model deployment",
    credibility: "Secure & Compliant",
  },
  {
    name: "Container & Orchestration",
    type: "DevOps & Infrastructure",
    icon: "🐳",
    description: "Docker, Kubernetes for scalable, reliable deployments",
    credibility: "High Availability",
  },
  {
    name: "TypeScript & Node.js",
    type: "Backend Development",
    icon: "🔷",
    description: "Type-safe, scalable server-side applications",
    credibility: "Maintainable",
  },
  {
    name: "Workflow Automation",
    type: "AI & Process Automation",
    icon: "⚙️",
    description: "AI agents, RPA, and business process automation",
    credibility: "Efficiency-Driven",
  },
  {
    name: "Real-time Analytics",
    type: "Data Intelligence",
    icon: "📈",
    description: "Interactive dashboards and business intelligence",
    credibility: "Actionable Insights",
  },
  {
    name: "API-First Design",
    type: "Integration Architecture",
    icon: "🔌",
    description: "REST, GraphQL, and system integration patterns",
    credibility: "Interoperable",
  },
];

export default function TechnologyStackSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl my-16 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>

      <div className="relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technology Stack Built for Growth & Impact
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We select technologies based on your business outcomes, not vendor
            partnerships. Our stack delivers production-ready solutions that
            scale with your growth while maintaining strategic flexibility and
            avoiding lock-in.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
              ⚡ Production-Ready
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
              🛡️ Vendor-Agnostic
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
              📈 Scalable by Design
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-semibold">
              🎯 Business-Aligned
            </span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide gap-6">
            {technologyStack.map((tech, index) => (
              <div
                key={index}
                className="shrink-0 w-72 h-48 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden backdrop-blur-sm"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/10 backdrop-blur-[1px] rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                    {tech.icon}
                  </div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1 text-center drop-shadow-sm">
                    {tech.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                    {tech.type}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-3 text-center leading-tight">
                    {tech.description}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {tech.credibility}
                  </span>
                </div>
              </div>
            ))}

            {technologyStack.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className="shrink-0 w-72 h-48 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden backdrop-blur-sm"
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/10 backdrop-blur-[1px] rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                    {tech.icon}
                  </div>
                  <div className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-1 text-center drop-shadow-sm">
                    {tech.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2 font-medium">
                    {tech.type}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-3 text-center leading-tight">
                    {tech.description}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {tech.credibility}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Automated Backups</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>Disaster Recovery</span>
            </div>
          </div>
          <blockquote className="text-slate-700 dark:text-slate-300 italic text-lg max-w-2xl mx-auto">
            "Our technology choices are driven by proven reliability, security
            standards, and long-term maintainability. We don't follow trends—we
            build with technologies that will serve your business for years to
            come."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
