export default function MessageField() {
  return (
    <textarea
      name="message"
      rows={5}
      placeholder="Tell us briefly about your project (optional)..."
      className="p-3 border rounded-xl w-full text-gray-900 placeholder:text-gray-400"
    />
  );
}
