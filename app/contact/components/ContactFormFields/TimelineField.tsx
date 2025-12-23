export default function TimelineField() {
  return (
    <select
      name="timeline"
      required
      defaultValue=""
      className="p-3 border rounded-xl w-full text-gray-400"
    >
      <option value="" disabled className="text-gray-400">
        Timeline for Results
      </option>
      <option className="text-gray-900">30 days (Urgent)</option>
      <option className="text-gray-900">
        1-3 months (Planning active phase)
      </option>
      <option className="text-gray-900">3-6 months (Early exploration)</option>
      <option className="text-gray-900">Just beginning research</option>
    </select>
  );
}
