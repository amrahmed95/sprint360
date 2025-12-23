const featuredServices = [
  {
    title: "Data Analysis & Reporting",
    desc: "Transform scattered data into clear, actionable insights with interactive dashboards and reliable data pipelines.",
    icon: "📊",
  },
  {
    title: "Data Science & Machine Learning",
    desc: "Build and deploy intelligent systems that turn data into automated decisions and predictive capabilities.",
    icon: "🤖",
  },
  {
    title: "Web & Mobile App Development",
    desc: "Create scalable, user-centric applications designed to grow with your business and integrate advanced features.",
    icon: "💻",
  },
  {
    title: "AI Process Automation",
    desc: "Automate complex workflows and manual processes with intelligent agents that enhance productivity and accuracy.",
    icon: "⚙️",
  },
  {
    title: "AI Strategy & Discovery",
    desc: "Identify high-impact opportunities and build a clear roadmap for AI adoption with measurable ROI projections.",
    icon: "🧭",
  },
  {
    title: "Technology Leadership",
    desc: "Strategic guidance and execution partnership to navigate digital transformation and sustained innovation.",
    icon: "👥",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h2 className="section-header">Our 360° Expertise</h2>
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {featuredServices.map((service) => (
          <div key={service.title} className="card">
            <div className="text-3xl mb-3">{service.icon}</div>
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-[--color-muted] text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <a href="/services" className="btn-primary inline-block">
          See All Services
        </a>
      </div>
    </section>
  );
}
