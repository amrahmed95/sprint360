export default function ContactHeader() {
  return (
    <div className="mb-10">
      {/* Accent line */}
      <div className="w-30 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-blue-300">Sprint360:</span>
        <span className="block text-slate-100 mt-2">
          Business Transformation
        </span>
        <span className="block text-slate-300">with Software, Data & AI</span>
      </h1>

      <div className="space-y-4 max-w-3xl">
        <div className="flex items-start gap-3">
          <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <p className="text-lg text-slate-300 leading-relaxed">
            We deliver measurable outcomes through{" "}
            <span className="font-bold text-blue-300 bg-blue-900/40 px-2 py-0.5 rounded border border-blue-700/30">
              results-focused delivery sprints
            </span>
            .
          </p>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500"></div>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Tell us about your challenge, and we'll share how our{" "}
            <span className="italic font-semibold text-indigo-300">
              counter-intuitive approach
            </span>{" "}
            can help.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="mt-8 pt-6 border-t border-slate-700/50">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Complete the form below or schedule a direct call</span>
        </div>
      </div>
    </div>
  );
}
