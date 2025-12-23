export default function AboutValues() {
  return (
    <section className="bg-[--color-card] border-t border-b border-[--color-card-border] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {[
            {
              icon: "❓",
              title: "Start With the Uncomfortable Question",
              text: "We uncover the real problem to build on a foundation of trust and clarity, not assumptions.",
            },
            {
              icon: "🎯",
              title: "Build for Impact, Not Complexity",
              text: "We choose the right tool for long-term results, ignoring hype and focusing on measurable outcomes.",
            },
            {
              icon: "🔍",
              title: "Radical Transparency",
              text: "We foster faster, better decisions with clear facts and honest communication—no 'agency theater'.",
            },
            {
              icon: "⭐",
              title: "Obsess Over Customer Outcomes",
              text: "Our success is measured solely by our clients' success. We're partners in your growth.",
            },
            {
              icon: "⚡",
              title: "Default to Action",
              text: "We think strategically, then execute decisively. Learn by doing, deliver by acting.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="card flex flex-col items-center text-center p-6 rounded-2xl bg-[--color-background] shadow hover:scale-[1.02] transition-transform w-full h-full justify-between"
            >
              <div className="text-4xl mb-3">{v.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{v.title}</h4>
              <p className="text-[--color-muted] text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
