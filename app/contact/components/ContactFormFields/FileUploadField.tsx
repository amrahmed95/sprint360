export default function FileUploadField() {
  return (
    <div>
      <label className="block mb-1 text-gray-600" htmlFor="file">
        Upload a file (optional)
      </label>
      <input
        type="file"
        name="file"
        id="file"
        accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
        className="p-3 border rounded-xl w-full"
      />
    </div>
  );
}
