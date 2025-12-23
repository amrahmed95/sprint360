const businessNeedOptions = [
  "I need to solve an immediate business problem",
  "I'm exploring AI/Data strategy for future growth",
  "I have a specific technical challenge to overcome",
  "I need a technology partner, trusted guidance, not just execution",
  "Other",
];

export default function BusinessContextOptionsField() {
  return (
    <select
      name="businessContext"
      required
      defaultValue=""
      className="p-3 border rounded-xl w-full text-gray-400"
    >
      <option value="DEFAULT" disabled className="text-gray-400">
        What's your primary need ?{" "}
      </option>
      {businessNeedOptions.map((option) => (
        <option key={option} className="text-gray-900">
          {option}
        </option>
      ))}
    </select>
  );
}
