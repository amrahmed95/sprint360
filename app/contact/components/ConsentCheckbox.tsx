export default function ConsentCheckbox() {
  return (
    <label className="flex gap-2 text-sm text-neutral-700">
      <input type="checkbox" name="consent" required />I agree to be contacted
      about my inquiry.
    </label>
  );
}
