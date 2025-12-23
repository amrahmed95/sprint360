export default function AboutJourney() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        How We Turn Vision into Reality
      </h2>
      <p className="text-lg text-gray-400 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center leading-relaxed tracking-wide">
        Our philosophy is simple but powerful:{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-100">
          execution should empower strategy, not complicate it.
        </span>{" "}
        Here's how we make that happen for every client.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            year: "Our Foundation",
            title: "Born from a Counter-Intuitive Belief",
            desc: "We founded Sprint360 on the belief that execution should be the easiest part of strategy. Every leader knows the frustration: brilliant strategy meets messy reality.",
          },
          {
            year: "Our Philosophy",
            title: "Rejecting the Vendor-Client Dichotomy",
            desc: "We built a partnership model where we act as an extension of your team. We combine what others keep separate—software, data, and AI—because real business problems don't come in siloed packages.",
          },
          {
            year: "Our Method",
            title: "The Sprint Mindset",
            desc: "We work in focused sprints, not endless projects. Each sprint delivers measurable outcomes, creating momentum and building trust through visible progress.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="card text-center p-6 rounded-2xl bg-[--color-card] shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-[--color-accent]">
              {item.year}
            </h3>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-[--color-muted] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
