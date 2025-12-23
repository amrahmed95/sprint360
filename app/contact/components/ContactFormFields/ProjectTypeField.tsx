const options = [
  "Executive Dashboards & Insights (For faster decision-making)",
  "AI/LLM Workflow Automation (Automate repetitive processes)",
  "Data Platform Modernization (Modernize infrastructure & pipelines)",
  "AI-Powered Software (Build web/mobile apps with AI features)",
  "IoT & Operational Analytics (Monitor assets & optimize operations)",
  "AI Strategy & Leadership (Fractional CTO / Advisory services)",
  "Other",
];

export default function ProjectTypeField() {
  return (
    <select
      name="projectType"
      required
      defaultValue=""
      className="p-3 border rounded-xl w-full text-gray-400"
    >
      <option value="" disabled className="text-gray-400">
        Project type
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="text-gray-900">
          {o}
        </option>
      ))}
    </select>
  );
}
