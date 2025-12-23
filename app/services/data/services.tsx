import { Service } from "../types/Services";

export const SERVICES: Service[] = [
  {
    id: "data-analysis",
    title: "Data Analysis & Intelligence",
    summary:
      "Transform scattered data into actionable insights with interactive dashboards and scalable pipelines.",
    slug: "data-analysis-intelligence",
    description:
      "We bridge the gap between raw data and strategic decisions. Our sprint-based approach delivers clear, actionable intelligence that drives business growth through interactive dashboards, reliable data pipelines, and real-time analytics.",
    animationPath: "/animations/data-analysis.json",
    bullets: [
      "Interactive business intelligence dashboards (Power BI, Tableau, Custom)",
      "Scalable cloud-native data pipelines (AWS, Azure, GCP)",
      "Data governance framework & quality monitoring systems",
      "Real-time KPI tracking & automated anomaly detection",
      "Executive reporting suites with drill-down capabilities",
      "Data warehouse optimization & performance tuning",
    ],
    features: [
      "Dashboard Development",
      "Data Pipeline Engineering",
      "Real-time Analytics",
      "Data Governance",
      "Business Intelligence",
    ],
    benefits: [
      "Faster, data-driven decisions",
      "Unified view of business performance",
      "Reduced manual reporting effort",
      "Scalable data infrastructure",
    ],
    useCases: [
      "E-commerce performance dashboards for real-time sales tracking",
      "Financial reporting automation for monthly closing acceleration",
      "Customer behavior analytics for personalized marketing optimization",
    ],
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    summary:
      "Build and deploy intelligent systems that turn data into automated decisions and predictive capabilities.",
    slug: "data-science-machine-learning",
    description:
      "Move from AI experiments to production systems. We deliver deployable models, custom LLM integrations, and MLOps pipelines that solve real business problems with measurable impact.",
    animationPath: "/animations/ai-robot.json",
    bullets: [
      "Predictive models for forecasting, classification, and optimization",
      "Custom LLM development with secure API integration",
      "Production-ready MLOps pipelines with automated retraining",
      "RAG (Retrieval-Augmented Generation) systems for document intelligence",
      "Real-time inference engines with monitoring and alerting",
      "Model explainability reports and compliance documentation",
    ],
    features: [
      "Predictive Analytics",
      "LLM Integration & Fine-tuning",
      "Computer Vision",
      "Recommendation Systems",
      "MLOps & Model Management",
    ],
    benefits: [
      "Automated, intelligent decision-making",
      "Competitive advantage through AI",
      "Reduced manual processing time",
      "Scalable AI infrastructure",
    ],
    useCases: [
      "Fraud detection systems for financial transaction security",
      "Demand forecasting models for inventory optimization",
      "Document classification and extraction for process automation",
    ],
  },
  {
    id: "software",
    title: "Web & Mobile App Development",
    summary:
      "Build scalable, user-centric applications designed to grow with your business and integrate advanced features.",
    slug: "web-mobile-app-development",
    description:
      "From MVP to enterprise-scale applications, we deliver production-ready software with modern architectures, seamless integrations, and future-proof foundations that support your growth journey.",
    animationPath: "/animations/webdevelopment.json",
    bullets: [
      "Full-stack development with modern frameworks (React, Next.js, Node.js)",
      "Scalable cloud-native architectures with auto-scaling capabilities",
      "API-first design with comprehensive documentation",
      "Third-party integration with CRM, payment, and analytics platforms",
      "DevOps pipelines with CI/CD, automated testing, and monitoring",
      "Progressive Web App (PWA) development for cross-platform deployment",
    ],
    features: [
      "Frontend Development (React, Next.js)",
      "Backend APIs & Microservices",
      "Database Design & Optimization",
      "DevOps & Cloud Deployment",
      "Integration Architecture",
    ],
    benefits: [
      "Rapid time-to-market",
      "Scalable, maintainable codebase",
      "Reduced technical debt",
      "Seamless future integrations",
    ],
    useCases: [
      "B2B SaaS platforms with subscription management and analytics",
      "E-commerce marketplaces with multi-vendor capabilities",
      "Internal business tools for workflow automation and collaboration",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Process Automation",
    summary:
      "Automate complex workflows and manual processes with intelligent agents that enhance productivity and accuracy.",
    slug: "ai-process-automation",
    description:
      "Eliminate manual, error-prone work with intelligent automation. We design and implement AI agents, workflow orchestration, and business process automation that scales your operations while reducing costs.",
    animationPath: "/animations/workflow-automation.json",
    bullets: [
      "Intelligent workflow automation with process mining and optimization",
      "AI-powered chatbots and virtual assistants for customer support",
      "Document processing automation with OCR and data extraction",
      "RPA (Robotic Process Automation) integration with legacy systems",
      "Real-time workflow monitoring with exception handling",
      "Automation analytics dashboard with ROI tracking",
    ],
    features: [
      "Workflow Automation Design",
      "AI Agent Development",
      "RPA Implementation",
      "Process Intelligence",
      "Integration Orchestration",
    ],
    benefits: [
      "Significant operational cost reduction",
      "Improved accuracy and compliance",
      "Faster process completion times",
      "Scalable workforce augmentation",
    ],
    useCases: [
      "Invoice processing automation with vendor reconciliation",
      "Customer service chatbots with escalation to human agents",
      "Employee onboarding automation with document verification",
    ],
  },
];
