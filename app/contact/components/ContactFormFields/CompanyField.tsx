export default function CompanyField() {
  return (
    <>
      <label>
        <span className="text-gray-900">Company Name </span>
      </label>
      <input
        name="company"
        placeholder="Company Name (optional)"
        className="p-3 border rounded-xl w-full text-gray-900 placeholder:text-gray-400"
      />
    </>
  );
}
