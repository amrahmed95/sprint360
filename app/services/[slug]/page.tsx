import { SERVICES } from "../data/services";
import LottieAnimation from "../components/ui/LottieAnimation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Sprint360",
      description: "The requested service could not be found.",
    };
  }

  // Generate service-specific metadata
  const title = `${service.title} | Sprint360 Services`;
  const description = service.summary;
  const keywords = `${service.title.toLowerCase()}, ${service.features}.join(
    ", "
  )}, digital transformation, sprint360 services`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <div>Service not found</div>;

  return (
    <div className="space-y-20 pb-20">
      {/* Section 1: Hero Header */}
      <section
        id={service.slug}
        className="relative py-20 px-6 bg-gradient-to-br from-card/80 to-background border-b border-card-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Header Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
                  {service.title}
                </h1>
                <div className="relative">
                  <p className="text-2xl md:text-3xl text-muted leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4"></div>
                </div>
              </div>

              {/* Value Quote */}
              <blockquote className="border-l-4 border-accent/50 pl-6 py-2">
                <p className="text-lg text-foreground/80 italic">
                  "Delivering exceptional value through cutting-edge solutions"
                </p>
              </blockquote>
            </div>

            {/* Lottie Animation */}
            <div className="relative">
              <div className="w-full h-80 rounded-2xl border border-card-border flex items-center justify-center p-4 bg-gradient-to-br from-accent/10 to-accent/5">
                <LottieAnimation
                  animationPath={service.animationPath ?? ""}
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Description */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-foreground/90 text-center">
            {service.description}
          </p>
        </div>
      </section>

      {/* Section 3: Key Deliverables / Bullets */}
      {service.bullets?.length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Sprint Deliverables
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              What you'll receive at the end of each {service.title} sprint
              engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.bullets.map((bullet, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card/50 border border-card-border hover:border-accent/30 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Deliverable {index + 1}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{bullet}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 4: Features / Capabilities */}
      {(service.features ?? []).length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Key Features
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Technical capabilities and strengths of our {service.title}{" "}
              offering
            </p>
          </div>

          {/* Desktop: Horizontal Icon Strip */}
          <div className="hidden lg:flex justify-center items-center gap-12 flex-wrap">
            {service.features?.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-card/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <span className="text-accent text-2xl">⚡</span>
                </div>
                <span className="text-foreground font-medium min-w-[120px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: Grid Cards */}
          <div className="lg:hidden grid grid-cols-2 gap-4">
            {service.features?.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card/30 border border-card-border text-center"
              >
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 5: Benefits / Value Proposition */}
      {(service.benefits ?? []).length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Business Impact & ROI
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              The measurable value you can expect from {service.title} service
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits?.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-card-border hover:border-accent/20 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <span className="text-accent text-xl">↑</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Benefit {index + 1}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section 6: Use Cases / Applications */}
      {(service.useCases ?? []).length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Real-world applications and scenarios
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.useCases?.map((useCase, index) => (
              <div
                key={index}
                className="group px-6 py-3 bg-card/50 border border-card-border rounded-full hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-foreground/90">{useCase}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Slider Placeholder */}
          {/* <div className="mt-12 p-8 rounded-2xl bg-card/30 border border-card-border text-center">
            <p className="text-muted mb-4">
              Interactive use case examples slider
            </p>
            <div className="w-full h-48 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-card-border flex items-center justify-center">
              <p className="text-muted">Swipe to explore detailed use cases</p>
            </div>
          </div> */}
        </section>
      )}

      {/* Section 7: CTA / Next Step */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-card/80 to-card/50 rounded-3xl p-12 border border-card-border">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your First Sprint?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title} service can deliver measurable
            outcomes for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-cta text-lg px-8 py-4">
              <span className="cta-label">Start a Project</span>
            </a>
            <a
              href="/schedule"
              className="btn-cta btn-cta-outline text-lg px-8 py-4"
            >
              <span className="cta-label">Request a Demo</span>
            </a>
          </div>

          <p className="text-sm text-muted mt-6">
            No commitment, 30-minute consultation
          </p>
        </div>
      </section>

      {/* Section 8: Visual Enhancements Placeholder */}
      {/* <section className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              See It In Action
            </h3>
            <p className="text-foreground/80">
              Interactive demonstrations and visualizations that bring{" "}
              {service.title} to life
            </p>
          </div>
          <div className="w-full h-64 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-card-border flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎬</span>
              </div>
              <p className="text-muted">Animated Visualization</p>
              <p className="text-sm text-muted/70">
                Service-specific demo content
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
