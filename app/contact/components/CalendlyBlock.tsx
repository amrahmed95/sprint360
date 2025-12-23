export default function CalendlyBlock() {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-[#16213a] via-[#1e3a8a]/30 to-[#174ea6] text-center shadow-lg border-0">
      <h3 className="text-2xl font-bold mb-2 text-white tracking-wide drop-shadow-lg">
        Prefer a meeting?
      </h3>
      <p className="text-neutral-200 mb-6 text-base">
        Book a free 30‑min discovery call.
      </p>
      <a
        href="https://calendly.com/amr-ahmedm95/30min"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl font-extrabold text-lg tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-gradient-to-r from-[#174ea6] to-[#1e3a8a] text-white shadow-md hover:scale-[1.03] hover:from-[#1e3a8a] hover:to-[#174ea6]"
        style={{
          border: "1.5px solid #1e3a8a",
          boxShadow:
            "0 6px 18px rgba(30,144,255,0.18), 0 0 28px rgba(30,144,255,0.10) inset",
        }}
      >
        <span className="cta-label">Book via Calendly</span>
      </a>
    </div>
  );
}
