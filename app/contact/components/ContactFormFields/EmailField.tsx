export default function EmailField() {
  return (
    <input
      name="email"
      type="email"
      required
      placeholder="youremail@company.com"
      className="p-3 border rounded-xl w-full text-gray-900 placeholder:text-gray-400"
    />
  );
}
