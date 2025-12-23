const features = [
  {
    title: "Outcome-Focused Sprints",
    desc: "We work in focused cycles that deliver tangible progress and measurable results, not open-ended projects.",
    icon: "⚡",
  },
  {
    title: "Integrated Technical Excellence",
    desc: "A unique combination of software engineering, data intelligence, and AI implementation under one roof.",
    icon: "🔄",
  },
  {
    title: "True Partnership Approach",
    desc: "We act as an extension of your team, committed to shared success with complete transparency.",
    icon: "🤝",
  },
  {
    title: "Operational Rigor & Precision",
    desc: "We combine strategic insight with flawless execution, ensuring every project delivers on its promise.",
    icon: "🏆",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
      <h2 className="section-header">The Sprint 360 Advantage</h2>
      <p className="text-[--color-muted] max-w-2xl mx-auto mb-12">
        We combine speed, strategy, and cutting-edge technology to deliver
        comprehensive solutions that drive results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="card">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-[--color-muted] text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
