const options = [
  "< $15k (Discovery & strategic assessment only)",
  "$15k - $35k (Focused pilot/sprint)",
  "$35k - $75k (Comprehensive sprint with outcomes)",
  "$75k - $150k (Multi-phase engagement)",
  "Enterprise/strategic partnership (Custom)",
  "Prefer outcome-based pricing model`",
];

export default function BudgetRangeField() {
  return (
    <select
      name="budget"
      required
      className="p-3 border rounded-xl w-full text-gray-400"
    >
      <option value="">Investment Range for Initial Phase</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}
